import React, { useEffect, useState } from 'react';
import { getProducts } from '../../data/backend';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ mensaje, fn, TotalCarrito }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(resolve => setProducts(resolve))
        .catch(reject => console.error(reject))
        .finally(console.log("Promesa resuelta"))
    }, [] )
    
    return (
    <>
        <div className='body'>
            <div><h1>Nuestros productos</h1></div>
            {<ItemList products={products} fn={fn} TotalCarrito={TotalCarrito}/>}
        </div>
        
    </>
    );
};

export default ItemListContainer;
