import { initializeApp } from "firebase/app";
import {getFirestore} from '@angular/fire/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyAO1X9nH5Zp5413ZmEZYm4Ys97NVGsh75I",
  authDomain: "upwork-chacker.firebaseapp.com",
  projectId: "upwork-chacker",
  storageBucket: "upwork-chacker.firebasestorage.app",
  messagingSenderId: "909472209793",
  appId: "1:909472209793:web:a83de8d9e8619129ace680"
};

// Ініціалізація Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

