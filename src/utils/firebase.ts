// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./constants";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { Product } from "../types/products";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)
//crear instancia de firestore.
export const getProductsListener = (cb: (docs: Product[]) => void) => {
    const ref = collection(db, "products");
    //  const unsub =
    onSnapshot(ref, (collection) => {
      const docs: Product[] = collection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      cb(docs);
    });
};
