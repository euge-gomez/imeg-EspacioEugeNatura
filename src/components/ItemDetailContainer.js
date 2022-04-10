import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {GoGet} from '../utils/GoGet';
import { useParams } from 'react-router-dom';
import Productos from '../utils/Products';

const ItemDetailContainer = () => {

    const[infoDetail, setInfoDetail] = useState({})
    const {idProducto} = useParams();

    useEffect(() => {
        GoGet(2000, Productos.find(item => item.id === parseInt(idProducto)) )
            .then(result => setInfoDetail(result))
            .catch(err => console.log(err))
    }, )
    
    return(
        <div> 
            <br/>
            <ItemDetail itemsDetail={infoDetail}/>
        </div>
    );
}
export default ItemDetailContainer;