import React from 'react'
import Item from './Item'

const ItemList = ({ instrumentos }) => {
    
    return (
        <div className='item-list-container'>        
            <div className='item-list'>
            {instrumentos.map((instrumento) => {
                return (
                    <Item
                        key={instrumento.id}
                        id={instrumento.id}
                        name={instrumento.modelo}
                        stock={instrumento.stock}
                        precio={instrumento.precio}
                        image={instrumento.imagen}
                        category={instrumento.tipo}
                    />
                )
            })}
        </div>
    </div>
    )
}

export default ItemList