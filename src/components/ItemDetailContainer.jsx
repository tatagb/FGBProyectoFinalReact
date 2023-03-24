import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import { collection, getDocs, getFirestore} from "firebase/firestore"
import Loader from './Loader';

const ItemDetailContainer = () => {
  const [instrumentos, setInstrumentos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const dataBase = getFirestore();
    const data = collection(dataBase, "instrumentos");
    getDocs(data).then((data)=>{
        const newInstrumentos = data.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
        }));
        setInstrumentos(newInstrumentos);
        setLoading (false);
      });
  }, []);

  if(loading){
    return <Loader/>;
  }
  return (
    <>
      <ItemDetail instrumentos={instrumentos}/>
    </>
  )
}

export default ItemDetailContainer