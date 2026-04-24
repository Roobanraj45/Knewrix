
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_EXTERNAL_FIREBASE_API_KEY,
  authDomain: "studio-2506567351-f45ca.firebaseapp.com",
  databaseURL: "https://studio-2506567351-f45ca-default-rtdb.firebaseio.com/",
  projectId: "studio-2506567351-f45ca",
  storageBucket: "studio-2506567351-f45ca.firebasestorage.app",
  messagingSenderId: "2506567351",
  appId: "1:2506567351:web:4f4f4f4f4f4f4f4f4f4f4f" // Placeholder, user will need to update with real App ID
};

// Initialize Firebase for the external database
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
