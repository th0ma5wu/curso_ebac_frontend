
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDdcvPUyji8yYwuvffenelw60KTDiOUYBU",
  authDomain: "tiktok---jornada-1f989.firebaseapp.com",
  projectId: "tiktok---jornada-1f989",
  storageBucket: "tiktok---jornada-1f989.appspot.com",
  messagingSenderId: "489759079056",
  appId: "1:489759079056:web:3e84434ecad92267923615"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;