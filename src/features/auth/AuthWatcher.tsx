import { useEffect } from 'react';
import API from './auth';
import { onAuthStateChanged } from 'firebase/auth';

export default function AuthWatcher() {
  useEffect(() => {
    const unsub = onAuthStateChanged(API.auth, (user) => {
      console.log('Auth changed:', user);
    });
    return () => unsub();
  }, []);

  return null; // it renders nothing
}
