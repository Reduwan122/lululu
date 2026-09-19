import AsyncStorage from '@react-native-async-storage/async-storage';
import { ref, get } from 'firebase/database';
import { doc, getDoc } from 'firebase/firestore';
import { rtdb, firestore } from './firebase';

export interface UserSession {
  id: string;
  username: string;
  name: string;
  userData?: any;
}

const STORAGE_KEY = '@absher_auth_session';

type AuthListener = (session: UserSession | null) => void;
const listeners: Set<AuthListener> = new Set();

export const VALID_CREDENTIALS = [
  { username: '1083920194', password: '123456', name: 'Mohammed Al-Otaibi' },
  { username: '1083920194', password: 'password123', name: 'Mohammed Al-Otaibi' },
  { username: '2631567092', password: '123456', name: 'MD SUMON MIA' },
  { username: '2631567092', password: 'password123', name: 'MD SUMON MIA' },
  { username: 'admin', password: '123456', name: 'Mohammed Al-Otaibi' },
  { username: 'admin', password: 'password123', name: 'Mohammed Al-Otaibi' },
  { username: '1234567890', password: '123456', name: 'Mohammed Al-Otaibi' },
];

let currentSession: UserSession | null = null;
let initialized = false;

export const authManager = {
  async init(): Promise<UserSession | null> {
    if (initialized) return currentSession;
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        currentSession = JSON.parse(stored);
      }
    } catch {
      currentSession = null;
    }
    initialized = true;
    return currentSession;
  },

  getSession(): UserSession | null {
    return currentSession;
  },

  async signIn(username: string, password: string): Promise<{ success: boolean; error?: string; userData?: any }> {
    const cleanUser = username.trim();
    const cleanPass = password.trim();

    // 1. Try Firebase Realtime Database Lookup
    try {
      let userDocData: any = null;

      // Query Realtime Database at /users/{cleanUser}
      const userRef = ref(rtdb, `users/${cleanUser}`);
      const userSnap = await get(userRef);

      if (userSnap.exists()) {
        userDocData = userSnap.val();
      } else {
        // Fallback: check Firestore if previously created there
        try {
          const fsSnap = await getDoc(doc(firestore, 'users', cleanUser));
          if (fsSnap.exists()) {
            userDocData = fsSnap.data();
          }
        } catch {}
      }

      if (userDocData) {
        if (userDocData.password && userDocData.password === cleanPass) {
          const session: UserSession = {
            id: userDocData.id_number || cleanUser,
            username: userDocData.id_number || cleanUser,
            name: userDocData.full_name || userDocData.name || 'Absher User',
            userData: userDocData,
          };
          currentSession = session;
          try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(session));
          } catch {}
          listeners.forEach((listener) => listener(session));
          return { success: true, userData: userDocData };
        } else {
          return { success: false, error: 'Invalid Password. Please check your credentials.' };
        }
      }
    } catch (firebaseErr: any) {
      console.warn('[Firebase RTDB Auth] Database query fallback:', firebaseErr.message);
    }

    // 2. Fallback to Local Mock Credentials for offline / local testing
    const matched = VALID_CREDENTIALS.find(
      (c) => c.username.toLowerCase() === cleanUser.toLowerCase() && c.password === cleanPass
    );

    if (!matched) {
      return {
        success: false,
        error: 'Invalid User ID or Password. Check your credentials or create user in Web Admin.',
      };
    }

    const session: UserSession = {
      id: matched.username,
      username: matched.username,
      name: matched.name,
    };

    currentSession = session;
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    } catch {}

    listeners.forEach((listener) => listener(session));
    return { success: true };
  },

  async signOut(): Promise<void> {
    currentSession = null;
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch {}
    listeners.forEach((listener) => listener(null));
  },

  onAuthStateChange(callback: AuthListener): () => void {
    listeners.add(callback);
    return () => {
      listeners.delete(callback);
    };
  },
};

