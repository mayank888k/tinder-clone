import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-VJW2Q-WlOM9Ov5InPPB7mI89c1DgK8A",
    authDomain: "tinder-clone-caad7.firebaseapp.com",
    projectId: "tinder-clone-caad7",
    storageBucket: "tinder-clone-caad7.appspot.com",
    messagingSenderId: "782842678648",
    appId: "1:782842678648:web:cb93d5246676ec4ce9cc8d",
    measurementId: "G-BDTVWJ46HP"
  };


  const firebaseapp = firebase.initializeApp(firebaseConfig)

  const database = firebaseapp.firestore()
  const auth = firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default database