import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Live Firebase Configuration
export const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY || 'AIzaSyBIZbjYlGvQ2nRHIcEX0UGrv3fzr3pXXrw',
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || 'absher-identity-db.firebaseapp.com',
  databaseURL:
    process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL ||
    'https://absher-identity-db-default-rtdb.firebaseio.com',
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID || 'absher-identity-db',
  storageBucket:
    process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || 'absher-identity-db.firebasestorage.app',
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '702737750720',
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID || '1:702737750720:web:f1356f3dbf2a1358ce6b25',
  measurementId: 'G-ZWVW0634GF',
};

// Safe initialization to prevent duplicate app instances
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const rtdb = getDatabase(app);
export const db = rtdb; // primary Realtime Database reference
export const firestore = getFirestore(app);
export const storage = getStorage(app);

