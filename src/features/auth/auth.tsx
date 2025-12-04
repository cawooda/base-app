import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, type Auth } from 'firebase/auth';
import { firebaseConfig } from './firebase.config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Type-safe API interface
// for authentication-related operations
// using Firebase Authentication
// SDK.
interface AuthAPI {
  auth: Auth;
  User: {
    signInWithEmailAndPassword: typeof signInWithEmailAndPassword;
  };
}

// Exporting a structured API object
// for use in other parts of the application.
// This encapsulates the Firebase
// authentication functionalities.
// It provides a clear and type-safe way
// to access authentication methods.

const API: AuthAPI = {
  auth,
  User: {
    signInWithEmailAndPassword,
  },
};

export default API;
