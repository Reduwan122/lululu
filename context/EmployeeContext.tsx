import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { ref, get, onValue, Unsubscribe } from 'firebase/database';
import { authManager, UserSession } from '../lib/auth';
import { rtdb } from '../lib/firebase';

export interface Employee {
  id: string;
  full_name: string;
  id_number: string;
  photo_url?: string;
  id_card_image_url?: string;
  id_profile_image_url?: string;
  iqama_sheet_image_url?: string;
  passport_image_url?: string;
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
  id: '',
  full_name: '',
  id_number: '',
  resident_id_number: '',
  resident_id_version: '1',
  resident_id_issuing_date: '',
  resident_id_expiry_date: '',
  passport_number: '',
  passport_type: 'Regular',
  passport_issuing_date: '',
  passport_expiry_date: '',
  passport_issuing_city: '',
  passport_status: 'Valid',
  birth_city: '',
  birth_country: '',
  date_of_birth: '',
  marital_status: 'Single',
  sponsorship_transfers: '0',
  religion: 'Islam',
  work_permit: 'Active',
  biometrics_collected: 'Enrolled',
  travel_status: 'Inside KSA',
  sponsor_id_number: '',
  sponsor_name: '',
  blood_type: 'O+',
  health_issuing_date: '',
  health_expiry_date: '',
  hajj_status: 'Eligible',
  hajj_last_year: 'None',
  occupation: '',
  nationality: '',
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
  const rtdbUnsubRef = useRef<Unsubscribe | null>(null);

  const fetchUserData = async (username: string) => {
    try {
      const restRes = await fetch(
        `https://absher-identity-db-default-rtdb.firebaseio.com/users/${encodeURIComponent(username)}.json`
      );
      if (restRes.ok) {
        const data = await restRes.json();
        if (data) return data;
      }
    } catch {}

    try {
      const snap = await get(ref(rtdb, `users/${username}`));
      if (snap.exists()) {
        return snap.val();
      }
    } catch (e: any) {
      console.warn('[EmployeeContext] Failed to fetch Realtime DB user:', e.message);
    }
    return null;
  };

  const logout = async () => {
    if (rtdbUnsubRef.current) {
      rtdbUnsubRef.current();
      rtdbUnsubRef.current = null;
    }
    await authManager.signOut();
    setSession(null);
    setEmployee(null);
  };

  const applySession = async (sess: UserSession | null) => {
    // Unsubscribe previous realtime listener if active
    if (rtdbUnsubRef.current) {
      rtdbUnsubRef.current();
      rtdbUnsubRef.current = null;
    }

    if (!sess) {
      setSession(null);
      setEmployee(null);
      return;
    }

    // Verify user exists in the Realtime Database
    const liveData = await fetchUserData(sess.username);
    if (!liveData) {
      console.warn(`[EmployeeContext] User ${sess.username} does not exist in database. Invalidating session.`);
      await logout();
      return;
    }

    setSession(sess);
    const data = liveData;

    setEmployee({
      ...DEFAULT_EMPLOYEE,
      ...(data || {}),
      id: sess.username,
      id_number: sess.username,
      resident_id_number: data?.resident_id_number || sess.username,
      full_name: data?.full_name || sess.name || 'Absher User',
      photo_url: data?.photo_url || undefined,
      id_card_image_url: data?.id_card_image_url || undefined,
      id_profile_image_url: data?.id_profile_image_url || data?.photo_url || undefined,
      iqama_sheet_image_url: data?.iqama_sheet_image_url || undefined,
      passport_image_url: data?.passport_image_url || undefined,
    });
    setError(null);

    // Subscribe to Realtime Database changes live
    try {
      const userRef = ref(rtdb, `users/${sess.username}`);
      rtdbUnsubRef.current = onValue(userRef, async (snapshot) => {
        if (snapshot.exists()) {
          const updated = snapshot.val();
          setEmployee((prev) => ({
            ...DEFAULT_EMPLOYEE,
            ...(prev || {}),
            ...updated,
            id: sess.username,
            id_number: sess.username,
          }));
        } else {
          // User was removed/deleted from the database!
          console.warn(`[EmployeeContext] User ${sess.username} was deleted from database. Auto-logging out.`);
          await logout();
        }
      });
    } catch (subErr: any) {
      console.warn('[EmployeeContext] Realtime listener error:', subErr.message);
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
      await applySession(sess);
    }
    return result;
  };


  const refresh = async () => {
    const sess = authManager.getSession();
    if (sess) {
      const liveData = await fetchUserData(sess.username);
      if (liveData) {
        sess.userData = liveData;
      }
      await applySession(sess);
    }
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
