import { auth } from '../../firebase.config';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  sendEmailVerification,
} from 'firebase/auth';

export const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInUserWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  console.log('Google sign-in result:', result);
  return result;
};

export const doSignOutUser = async () => {
  return signOut(auth);
};

export const doPasswordReset = async (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordUpdate = async (password: string) => {
  if (auth.currentUser) {
    return updatePassword(auth.currentUser, password);
  } else {
    throw new Error('No user is currently signed in.');
  }
};

export const doSendEmailVerification = async () => {
  if (auth.currentUser) {
    return sendEmailVerification(auth.currentUser);
  } else {
    throw new Error('No user is currently signed in.');
  }
};
