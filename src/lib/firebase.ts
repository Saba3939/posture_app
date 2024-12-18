import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDGCj6fLtszkXrn53qJoNBYI_XOgZD_P0",
  authDomain: "dcon2025-5080a.firebaseapp.com",
  projectId: "dcon2025-5080a",
  storageBucket: "dcon2025-5080a.firebasestorage.app",
  messagingSenderId: "816904654159",
  appId: "1:816904654159:web:49609f9665371c1660893a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };