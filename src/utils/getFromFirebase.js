import {query, where, collection, getDocs} from '@firebase/firestore';
import {doc, getDoc} from 'firebase/firestore'
import db from './firebaseConfig';

export const goGetfromFb = async (idFiltrado) => {
    let cat;
    if(idFiltrado) {
        cat = query(collection(db, "products"), where('categoryId', '==', idFiltrado));
    } else {
        cat = query(collection(db, "products"));
    }
    
    const searchDb = await getDocs(cat);
    const getDb = searchDb.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return getDb;
}

export const goGetOnefromFb = async (idProducto) => {
    const idDoc = doc(db, "products", idProducto);
    const grabedDoc = await getDoc(idDoc);
    
    if (grabedDoc.exists()) {
        return {
            id: idProducto,
            ...grabedDoc.data()
        }
      } else {
        console.error("No existe el producto");
      }
  }

