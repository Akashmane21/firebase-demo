import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyA6-Cw2XQ36D39BypxWKzej9NOm2ER6Oys",
  authDomain: "storage-6e6c1.firebaseapp.com",
  databaseURL: "https://storage-6e6c1-default-rtdb.firebaseio.com",
  projectId: "storage-6e6c1",
  storageBucket: "storage-6e6c1.appspot.com",
  messagingSenderId: "365250964769",
  appId: "1:365250964769:web:02a8accdf0ba0336d86260"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;