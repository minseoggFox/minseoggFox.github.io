// Firebase 설정 및 초기화
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBE4uWboxXuAEBMUGAL9LdTWETKhUmB1B8",
  authDomain: "mle-0-c9fdc.firebaseapp.com",
  projectId: "mle-0-c9fdc",
  storageBucket: "mle-0-c9fdc.firebasestorage.app",
  messagingSenderId: "329191039255",
  appId: "1:329191039255:web:f76fea57abfff2d37e5752",
  measurementId: "G-5QXDP0ZY1J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }; 