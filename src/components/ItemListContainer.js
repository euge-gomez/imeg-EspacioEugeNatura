import React from 'react';
import ItemCount from './ItemCount';
import { useEffect, useState } from 'react';
import Productos from './Products';
import ItemList from './ItemList'
import GoGet from './GoGet';

const ItemListContainer = ({greeting}) => {

    const[info, setInfo] = useState([])

    useEffect(() => {
        GoGet(2000, Productos)
        .then(result => setInfo(result))
        .catch(err => console.log(err))
    }, [])

    const onAdd = (quantity) => {
        alert('Has seleccionado ' + quantity + " productos.")
    }

    return(
        <div> {greeting} 
        <br/>
        <ItemList items={info}/>
        <ItemCount stock={4} initial={1} onAdd={onAdd}/>
        </div>
    );
}
export default ItemListContainer;