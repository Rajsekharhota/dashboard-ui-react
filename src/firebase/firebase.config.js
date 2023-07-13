import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDtaRtXhBVcWPQRo5a5U6oo3uqw82mr0tQ",
  authDomain: "dashboard-442bd.firebaseapp.com",
  projectId: "dashboard-442bd",
  storageBucket: "dashboard-442bd.appspot.com",
  messagingSenderId: "730178714252",
  appId: "1:730178714252:web:9d032460c8770a098d19a9",
  measurementId: "G-KWM6FFPZ1T",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
