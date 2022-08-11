import { app, db } from './firebase-app';
// import { collection, getDocs } from 'firebase/firestore';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore';

// const usersDb = firestore.collection(db, '/users');
const usersDb = collection(db, 'pitch-users');
console.log(usersDb);

export const getUser = async (username) => {
  console.log(username);
  // const result = getDocs();
  // console.log(result);
  // db.collection('users');

  // .docs()
  // .then((res) => console.log(res));

  const querySnapshot = await getDocs(usersDb);
  querySnapshot.forEach((doc) => {
    console.log(doc.id);
  });

  getDocs(usersDb).then((res) => {
    res.forEach((doc) => {
      console.log(doc.id);
    });
  });
};

// firebase
//     .firestore()
//     .collection('restaurants')
//     .limit(1)
//     .onSnapshot(function(snapshot) {
//       if (snapshot.empty) {
//         that.router.navigate('/setup');
//       }
//     });
