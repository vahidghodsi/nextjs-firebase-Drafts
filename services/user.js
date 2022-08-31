import { auth } from './firebase-app';
import { signInAnonymously, onAuthStateChanged, signOut } from 'firebase/auth';

const userSignInAnonymously = () => {
  return signInAnonymously(auth)
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

const userSignOut = () => {
  return signOut(auth)
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

const userOnAuthChange = (callbackFn) => onAuthStateChanged(auth, callbackFn);

export const firebaseUserService = {
  userSignInAnonymously,
  userSignOut,
  userOnAuthChange,
};

// =====
userOnAuthChange((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // const uid = user.uid;
    // ...
    console.log('[USER_AUTH_CHANGE:]', user);
  } else {
    console.log('[USER_AUTH_CHANGE:]', 'signed out');
  }
});
