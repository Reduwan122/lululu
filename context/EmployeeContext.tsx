import React, { createContext, useContext, useEffect, useState } from 'react';
import { authManager, UserSession } from '../lib/auth';

export interface Employee {
  id: string;
  full_name: string;
  id_number: string;
  photo_url?: string;
  id_card_image_url?: string;
  id_profile_image_url?: string;
  qr_code_url?: string;
  resident_id_number: string;
  resident_id_version: string;
  resident_id_issuing_date: string;
  resident_id_expiry_date: string;
  passport_number: string;
  passport_type: string;
  passport_issuing_date: string;
  passport_expiry_date: string;
  passport_issuing_city: string;
  passport_status: string;
  birth_city: string;
  birth_country: string;
  date_of_birth: string;
  marital_status: string;
  sponsorship_transfers: string;
  religion: string;
  work_permit: string;
  biometrics_collected: string;
  travel_status: string;
  sponsor_id_number: string;
  sponsor_name: string;
  blood_type: string;
  health_issuing_date: string;
  health_expiry_date: string;
  hajj_status: string;
  hajj_last_year: string;
  occupation: string;
  nationality: string;
  [key: string]: any;
}

export const DEFAULT_EMPLOYEE: Employee = {
  id: '1083920194',
  full_name: 'Mohammed Al-Otaibi',
  id_number: '1083920194',
  resident_id_number: '1083920194',
  resident_id_version: '3',
  resident_id_issuing_date: '1442/04/15',
  resident_id_expiry_date: '1448/04/14',
  passport_number: 'N01829348',
  passport_type: 'Regular',
  passport_issuing_date: '2021/06/10',
  passport_expiry_date: '2031/06/09',
  passport_issuing_city: 'Riyadh',
  passport_status: 'Valid',
  birth_city: 'Riyadh',
  birth_country: 'Saudi Arabia',
  date_of_birth: '1990/08/14',
  marital_status: 'Married',
  sponsorship_transfers: '0',
  religion: 'Muslim',
  work_permit: 'Active',
  biometrics_collected: 'Enrolled',
  travel_status: 'Inside KSA',
  sponsor_id_number: '7001928374',
  sponsor_name: 'Al-Rajhi Corporation',
  blood_type: 'O+',
  health_issuing_date: '1445/01/01',
  health_expiry_date: '1446/01/01',
  hajj_status: 'Eligible',
  hajj_last_year: 'None',
  occupation: 'Software Engineer',
  nationality: 'Saudi Arabia',
};

interface EmployeeContextValue {
  employee: Employee | null;
  session: UserSession | null;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  login: (idNumber: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const EmployeeContext = createContext<EmployeeContextValue>({
  employee: null,
  session: null,
  loading: true,
  error: null,
  refresh: async () => {},
  login: async () => ({ success: false }),
  logout: async () => {},
});

export function EmployeeProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<UserSession | null>(null);
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const applySession = (sess: UserSession | null) => {
    setSession(sess);
    if (sess) {
      setEmployee({
        ...DEFAULT_EMPLOYEE,
        id: sess.username,
        id_number: sess.username,
        resident_id_number: sess.username,
        full_name: sess.name || DEFAULT_EMPLOYEE.full_name,
      });
      setError(null);
    } else {
      setEmployee(null);
    }
  };

  useEffect(() => {
    authManager.init().then((sess) => {
      applySession(sess);
      setLoading(false);
    });

    const unsubscribe = authManager.onAuthStateChange((sess) => {
      applySession(sess);
    });

    return unsubscribe;
  }, []);

  const login = async (idNumber: string, pass: string) => {
    const result = await authManager.signIn(idNumber, pass);
    if (result.success) {
      const sess = authManager.getSession();
      applySession(sess);
    }
    return result;
  };

  const logout = async () => {
    await authManager.signOut();
    applySession(null);
  };

  const refresh = async () => {
    const sess = authManager.getSession();
    applySession(sess);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employee,
        session,
        loading,
        error,
        refresh,
        login,
        logout,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployee() {
  return useContext(EmployeeContext);
}
