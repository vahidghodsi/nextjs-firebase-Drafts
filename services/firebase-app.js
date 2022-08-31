// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDjQzrODxxNfQlVmEHHjS8RCLJ8Km4Fu5I',
  authDomain: 'duna-bd286.firebaseapp.com',
  projectId: 'duna-bd286',
  storageBucket: 'duna-bd286.appspot.com',
  messagingSenderId: '401624030725',
  appId: '1:401624030725:web:351747acd2db760306866c',
  measurementId: 'G-176QGBFKJ9',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth(app);
