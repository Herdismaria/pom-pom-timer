import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAys-eo7yiqcrgh3dDErGRm21jVWCqWMSA",
    authDomain: "pompom-2566d.firebaseapp.com",
    databaseURL: "https://pompom-2566d.firebaseio.com",
    projectId: "pompom-2566d",
    storageBucket: "pompom-2566d.appspot.com",
    messagingSenderId: "206892306090"
  };

  firebase.initializeApp(config);
  const database = firebase.database();

  export default database;
