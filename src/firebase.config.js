// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRKUva1qKK2jw3YIxy1zSPXF3vqloP4fY",
  authDomain: "moon-bistro-boos-client.firebaseapp.com",
  projectId: "moon-bistro-boos-client",
  storageBucket: "moon-bistro-boos-client.appspot.com",
  messagingSenderId: "32029743769",
  appId: "1:32029743769:web:a9060b7d2b3e4baf40f608"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;