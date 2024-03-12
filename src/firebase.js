import firebase from "firebase/compat/app"
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAQ1wtb_WP93q5eiMMnOk4d3lYdOJSFLzM",
  authDomain: "netflixclone-3f295.firebaseapp.com",
  projectId: "netflixclone-3f295",
  storageBucket: "netflixclone-3f295.appspot.com",
  messagingSenderId: "72400534129",
  appId: "1:72400534129:web:2bb70cace91df74b23f9d0"
};

  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  export{auth}