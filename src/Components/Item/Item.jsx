import React, { useState } from 'react';
import ButtonAgregar from '../Buttons/ButtonAgregar';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ e, fn, TotalCarrito }) => {
    
    return (
        <div className='TarjetaProductos'>
            <img src={e.img} width={"400px"} height={"400px"} alt={e.model} />
            <p>{e.id}</p>
            <p>{e.model}</p>
            <p>${e.price}</p>
            <ButtonAgregar text="Agregar al carrito" fn={fn} TotalCarrito={TotalCarrito} />
            <button className='button-detalles'><Link to={`/product/${e.id}`}>Más detalles</Link></button>
        </div>
    );
};

export default Item;
