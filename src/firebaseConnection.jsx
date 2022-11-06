import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

//const firebaseConfig 
const firebaseConfig = {
  apiKey: "AIzaSyBQTVsoWG4uc9mgu4o88Ig6j2iNO1K8VWg",
  authDomain: "daniel-aula07.firebaseapp.com",
  projectId: "daniel-aula07",
  storageBucket: "daniel-aula07.appspot.com",
  messagingSenderId: "971947098770",
  appId: "1:971947098770:web:f9c47803de7a25bbb21c4b"
};

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  export {db, auth};
