import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:"AIzaSyDLemuu0sfh7TrWRBEMs1paRL9UWBN835c",
  authDomain: "quiz-project-remastered.firebaseapp.com",
  projectId: "quiz-project-remastered",
  storageBucket: "quiz-project-remastered.appspot.com",
  messagingSenderId: "521175503866",
  appId: "1:521175503866:web:f42b9c1447abbea07e8a43"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);