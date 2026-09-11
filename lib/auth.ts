import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserSession {
  id: string;
  username: string;
  name: string;
}

const STORAGE_KEY = '@absher_auth_session';

type AuthListener = (session: UserSession | null) => void;
const listeners: Set<AuthListener> = new Set();

export const VALID_CREDENTIALS = [
  { username: '1083920194', password: '123456', name: 'Mohammed Al-Otaibi' },
  { username: '1083920194', password: 'password123', name: 'Mohammed Al-Otaibi' },
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

  async signIn(username: string, password: string): Promise<{ success: boolean; error?: string }> {
    const cleanUser = username.trim().toLowerCase();
    const cleanPass = password.trim();

    const matched = VALID_CREDENTIALS.find(
      (c) => c.username.toLowerCase() === cleanUser && c.password === cleanPass
    );

    if (!matched) {
      return {
        success: false,
        error: 'Invalid User ID or Password. Use ID: 1083920194 and Password: 123456',
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

