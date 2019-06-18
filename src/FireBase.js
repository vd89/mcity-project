import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyACM6hBzfQyyxAyYmZ2-D52kW1IyCkTszA",
  authDomain: "mcity-386b5.firebaseapp.com",
  databaseURL: "https://mcity-386b5.firebaseio.com",
  projectId: "mcity-386b5",
  storageBucket: "mcity-386b5.appspot.com",
  messagingSenderId: "658814115777",
  appId: "1:658814115777:web:575fc04ac9562f5c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database()
const firebaseMatches = firebaseDB.ref('matches')
const firebasePromotions = firebaseDB.ref('promotions')
// firebaseDB.ref('matches').once('value').then((snapshot) =>{
//   console.log(snapshot.val())
// })  // see the connection is done or not 

export {
  firebase,
  firebaseMatches,
  firebasePromotions
}