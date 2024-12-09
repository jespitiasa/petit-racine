import React from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";

const CartWidget = ({TotalCarrito}) => {
    return (
        <div className='cartWidget'><MdOutlineShoppingBag /><span>{TotalCarrito}</span></div>
    )
}

export default CartWidget