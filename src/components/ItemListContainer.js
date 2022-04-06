import React from 'react';
import { useEffect, useState } from 'react';
import Productos from '../utils/Products';
import ItemList from './ItemList'
import {GoGet} from '../utils/GoGet';

const ItemListContainer = ({greeting}) => {

    const[info, setInfo] = useState([])

    useEffect(() => {
        GoGet(2000, Productos)
        .then(result => setInfo(result))
        .catch(err => console.log(err))
    }, [])

    return(
        <div> {greeting} 
            <br/>
            <ItemList items={info}/>
        </div>
    );
}
export default ItemListContainer;