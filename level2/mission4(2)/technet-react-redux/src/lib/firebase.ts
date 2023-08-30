// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAEIGr4wM4Da_32LFwiOQ7Pb8oB7z0pCW0',
  authDomain: 'tech-net-f3267.firebaseapp.com',
  projectId: 'tech-net-f3267',
  storageBucket: 'tech-net-f3267.appspot.com',
  messagingSenderId: '747195777332',
  appId: '1:747195777332:web:318bc7280734c11382a561',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
