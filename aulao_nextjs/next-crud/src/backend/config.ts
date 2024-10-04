import firebase from "firebase";
import 'firebase/firestore'

/*
  Configuração do firebase na nossa aplicação, essa
  configuração permitirá que a minha aplicação
  consiga se comunicar com o firebase.
 */

/*
 Se length for maior do que zero, significa que o firebase
 foi inicializado.
*/
if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })
}

export default firebase