import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import SendOrder from './SendOrder';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += (item.precio*item.quantity);
    });
    setTotalPrice(total);
  }, [cart]);

  const deleteItem = (id) => {
    Swal.fire({
      title: '¿Desea eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
        console.log("Producto Eliminado");
        Swal.fire(
          '¡Eliminado!',
          'El producto fue eliminado',
          'success'
        )
      }
    })
  };

  return (
    <>
      <div className='cart'>
        <h3 className='cart-title'>PRODUCTOS</h3>
        {(cart.length == 0) && <h3>Carrito vacío</h3>}
        {cart.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <img className="cart-item-img" src={item.image} alt=""></img>
              <p>{item.name}</p>
              <span>Cantidad: {item.quantity}</span>
              <span>Precio: $ {item.precio}</span>
              <span>Subtotal: ${item.precio * item.quantity}</span>
              <button className="btn-delete" onClick={() => deleteItem(item.id)}>X</button>
            </div>
          )
        })}
        {(cart.length > 0) && <h3>Total: ${totalPrice}</h3>}
        {(cart.length > 0) && <SendOrder/>}

      </div>
    </>
  )
}

export default Cart