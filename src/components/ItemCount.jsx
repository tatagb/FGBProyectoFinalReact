import React from 'react'
import { useContext, useState } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const ItemCount = ({ stock, id, name, precio, image }) => {
    const [cart, setCart] = useContext(CartContext);
    const [count, setCount] = useState(0);

    const addQuantity = () => {
        if (count < stock) {
            setCount(count + 1
            )
        }
        ;
    }

    const substractQuantity = () => {
        if (count > 0) {
            setCount(count - 1)
        }
        ;
    }

    const addToCart = () => {
        setCart((products) => {
            const existingProduct = products.find((product) => product.id === id);
            if (existingProduct) {
                return products.map((product) => {
                    if (product.id === id) {
                        return { ...product, quantity: product.quantity + count };
                    } else {
                        return product;
                    }
                });
            } else {
                return [...products, { id, quantity: count, name, precio, image }];
            }
        });
    }

    return (
        <div>
            <div className='item-count'>
                <button onClick={substractQuantity} className="btn-item-count">-</button>
                <p>{count}</p>
                <button onClick={addQuantity} className="btn-item-count">+</button>
            </div>
            <button onClick={addToCart} className="btn-add">Agregar: {count}</button>
        </div>

    )
}

export default ItemCount