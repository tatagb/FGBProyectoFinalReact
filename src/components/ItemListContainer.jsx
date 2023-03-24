import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore} from "firebase/firestore"
import Loader from './Loader';

const ItemListContainer = () => {
  const { category } = useParams();
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

  const catFilter = instrumentos.filter((instrumento) =>instrumento.category === category);
  console.log(catFilter);

  if(loading){
    return <Loader/>;
  }
  return (
    <>
      {category ? <ItemList instrumentos={catFilter} /> : <ItemList instrumentos={instrumentos} />}
    </>

  )
}

export default ItemListContainer