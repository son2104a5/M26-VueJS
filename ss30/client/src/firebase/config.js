import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.VITE_API_KEY,
  authDomain: "test-7e974.firebaseapp.com",
  projectId: "test-7e974",
  storageBucket: "test-7e974.appspot.com",
  messagingSenderId: "38238394353",
  appId: "1:38238394353:web:a7c8d2d342ee9c18629650",
  measurementId: "G-QLRHVMFY2C"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage