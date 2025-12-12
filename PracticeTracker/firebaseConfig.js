import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';   
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBfZDdkdTRCpv10_bMBYRgPlrcnPE-ZJ6I",
  authDomain: "practice-tracker-912a1.firebaseapp.com",
  projectId: "practice-tracker-912a1",
  storageBucket: "practice-tracker-912a1.firebasestorage.app",
  messagingSenderId: "675397162526",
  appId: "1:675397162526:web:788c616b4ba50e2e69800f",
  measurementId: "G-GY13YENT2H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
