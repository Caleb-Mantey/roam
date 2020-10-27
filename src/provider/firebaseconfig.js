import firebase from '@react-native-firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyB2f0Y5FzIWYuxK1ky5e0LwHTUrgmjlokc",
    authDomain: "complaint-56a42.firebaseapp.com",
    databaseURL: "https://complaint-56a42.firebaseio.com",
    projectId: "complaint-56a42",
    storageBucket: "complaint-56a42.appspot.com",
    messagingSenderId: "348411680471",
    appId: "1:348411680471:web:47693ff8b344eb84d2c292"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;