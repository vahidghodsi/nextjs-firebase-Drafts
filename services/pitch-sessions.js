import { db } from './firebase-app';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';

const sessionDb = collection(db, 'pitch_sessions');

export const getSession = (uid) => {
  return getDoc(doc(sessionDb, uid)).then((res) => console.log(res.data()));
};

export const getSessions = () => {
  return getDocs(sessionDb).then(
    // (res) => res.docs
    (res) =>
      res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })
    // res.docs.forEach((session) => console.log(session.data()))
  );
};

// getSession('T6Y5nzi4PbQDjXqra5bc').then((res) => console.log(res.data()));
// getSessions().then((res) => console.log(res));
// getSessions().then((res) => res.forEach((doc) => console.log(doc.data())));

export const firebaseSessions = {
  getSession,
  getSessions,
};
