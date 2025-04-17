// frontend/src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX7aQM1pUEb_8dzjQ6RHNE3YPfmPR7H-Q",
  authDomain: "app-uiner.firebaseapp.com",
  projectId: "app-uiner",
  storageBucket: "app-uiner.firebasestorage.app",
  messagingSenderId: "469915806928",
  appId: "1:469915806928:web:f2f524708b605a6011c2d5"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
