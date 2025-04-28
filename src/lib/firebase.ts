import {
  initializeApp,
  getApps,
  FirebaseOptions,
  FirebaseApp,
} from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCx6mvTcr_sJuAYhdgxR5icZQAE4eDOkhU",
  authDomain: "onchainrank2.firebaseapp.com",
  projectId: "onchainrank2",
  storageBucket: "onchainrank2.firebasestorage.app",
  messagingSenderId: "84268016962",
  appId: "1:84268016962:web:16de20c089753a681294db",
};

const app: FirebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0];

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
