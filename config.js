// import firebase from 'firebase';

// const firebaseConfig = {
//    apiKey: "AIzaSyC-V6OW-K6J5kf2xyKSk9clSxCOvR7Wy4M",
//   authDomain: "plant-care-e46a4.firebaseapp.com",
//   projectId : "plant-care-e46a4",
//   storageBucket: "plant-care-e46a4.appspot.com",
//   messagingSenderId: "1034365339503",
//   appId: "1:1034365339503:web:e4c995cec280e7c3cd0a9a"
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } 
  
// export default firebase.firestore();


import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC-V6OW-K6J5kf2xyKSk9clSxCOvR7Wy4M",
   authDomain: "plant-care-e46a4.firebaseapp.com",
   projectId : "plant-care-e46a4",
   storageBucket: "plant-care-e46a4.appspot.com",
   messagingSenderId: "1034365339503",
   appId: "1:1034365339503:web:e4c995cec280e7c3cd0a9a"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
