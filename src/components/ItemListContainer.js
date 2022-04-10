import React from 'react';
import { useEffect, useState } from 'react';
import Productos from '../utils/Products';
import ItemList from './ItemList'
import {GoGet} from '../utils/GoGet';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const[info, setInfo] = useState([]);
    const {idFiltrado} = useParams();

    useEffect(() => {
        if(idFiltrado === undefined){
            GoGet(2000, Productos)
            .then(result => setInfo(result))
            .catch(err => console.log(err))
        } else {
            GoGet(2000, Productos.filter(item => item.categoryId === parseInt(idFiltrado)))
            .then(result => setInfo(result))
            .catch(err => console.log(err))
        };
        
    }, [idFiltrado])

    return(
        <div> 
            <ItemList items={info}/>
        </div>
    );
}
export default ItemListContainer;