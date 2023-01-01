import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyD_oi_h0reooMwgqlH1Vc_A9dzl3SudbM4",
  authDomain: "backendreactcoderhouse.firebaseapp.com",
  projectId: "backendreactcoderhouse",
  storageBucket: "backendreactcoderhouse.appspot.com",
  messagingSenderId: "208112879625",
  appId: "1:208112879625:web:da12a65bbee8ea73f590d8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) //me conecto a la base de datos
