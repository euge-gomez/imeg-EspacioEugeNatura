import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { goGetOnefromFb } from '../utils/getFromFirebase';

const ItemDetailContainer = () => {

    const [infoDetail, setInfoDetail] = useState({})
    const {idProducto} = useParams();

    useEffect(() => {
        goGetOnefromFb(idProducto)
            .then(result => setInfoDetail(result))
            .catch(err => console.log(err))
    }, [])
    
    return(
        <div> 
            <br/>
            <ItemDetail item={infoDetail}/>
        </div>
    );
}
export default ItemDetailContainer;