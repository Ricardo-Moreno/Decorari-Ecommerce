import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEjfKcLrtHHAPI2aTalQkT7OpnlRC4Kw4",
  authDomain: "ecommerce-decorari.firebaseapp.com",
  projectId: "ecommerce-decorari",
  storageBucket: "ecommerce-decorari.appspot.com",
  messagingSenderId: "1070683586000",
  appId: "1:1070683586000:web:567dbde6923660fac2cdd5",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
  const miCollection = collection(firestore, "items");
  let respuesta = await getDocs(miCollection);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

export async function getSingleItem(idParams) {
  const docRef = doc(firestore, "items", idParams);
  const docSnapshot = await getDoc(docRef);
  return { ...docSnapshot.data(), id: docSnapshot.id };
}

export async function getItemsBycategory(catParams) {
  const collectionRef = collection(firestore, "items");
  const queryCategory = query(
    collectionRef,
    where("category", "==", catParams)
  );

  const respuesta = await getDocs(queryCategory);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

export async function createBuyOrder(orderData) {
  const CollectionRef = collection(firestore, "orders");
  let respuesta = await addDoc(CollectionRef, orderData);
  return respuesta.id;
}

export async function generarTraerUnDocumento(id) {
  const documentoRef = doc(firestore, "orders", id);
  const documento = await getDoc(documentoRef);
  return { ...documento.data(), id: documento.id };
}
export default firestore;
