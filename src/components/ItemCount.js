import React  from 'react';
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setCounter]=useState(0);

    const increment = () => {
        if (quantity<stock) {
            setCounter(quantity+1)
        }
    }

    const substract = () => {
        if (quantity>initial){
            setCounter(quantity-1)
        }
    }

    return(
        <div className="m-3">
            <button className="btn-secondary m-2" onClick={increment}>+</button>
            <span>{quantity}</span>
            <button className="btn-secondary m-2" onClick={substract}>-</button>
            <button className="btn-primary" onClick={() => onAdd(quantity)}>Añadir al Carro</button>
        </div>
    );
}
export default ItemCount;