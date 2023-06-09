import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "<tu_apiKey>",
  authDomain: "ecommerce-decorari.firebaseapp.com",
  projectId: "ecommerce-decorari",
  storageBucket: "ecommerce-decorari.appspot.com",
  messagingSenderId: "1070683586000",
  appId: "1:1070683586000:web:567dbde6923660fac2cdd5",
};

const app = initializeApp(firebaseConfig);

export default app;
