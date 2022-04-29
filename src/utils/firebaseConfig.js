
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz7qipl-RKq8qjrYTBWzYDvRWG43Guscs",
  authDomain: "cursoreactcoder-586ba.firebaseapp.com",
  projectId: "cursoreactcoder-586ba",
  storageBucket: "cursoreactcoder-586ba.appspot.com",
  messagingSenderId: "851232774791",
  appId: "1:851232774791:web:f5793ec1ab8e5d15bdf622"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;