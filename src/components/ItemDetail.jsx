import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from 'react';

const ItemDetail = ({ instrumentos }) => {
  const { id } = useParams ();
  const [product, setProduct]= useState([]);

  useEffect(()=>{
    const dataBase = getFirestore();
    const thisProduct = doc(dataBase, "instrumentos", `${id}`);
    getDoc(thisProduct).then((snapshot)=>{
      if (snapshot.exists()) {
        setProduct(snapshot.data());
      } else {
        console.log("El producto no existe");
      }
    });
  }, []);

  const instrumentoFilter = instrumentos.filter((instrumento) => instrumento.id == id)

  return (
    <>
      {instrumentoFilter.map((instrumento) =>
        <div key={instrumento.id} className="detail-container">
          <img src={instrumento.imagen} alt=""></img>
          <div className='data-container'>
          <p>{instrumento.tipo}</p>
            <h2>{instrumento.modelo}</h2>
            <p>{instrumento.detalle}</p>
            <p>Stock: {instrumento.stock}</p>
            <div className='price'>Precio: ${instrumento.precio}</div>
            <ItemCount tipo={instrumento.tipo} stock={instrumento.stock} id={instrumento.id} name={instrumento.modelo} precio={instrumento.precio} image={instrumento.imagen}/>
          </div>
        </div>
      )}
    </>
  )
}

export default ItemDetail