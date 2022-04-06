import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {GoGet} from '../utils/GoGet';

const ItemDetailContainer = () => {

    const[infoDetail, setInfoDetail] = useState({})

    useEffect(() => {
        GoGet()
        .then(result => setInfoDetail(result))
        .catch(err => console.log(err))
    }, [])
    
    return(
        <div> 
            <br/>
            <ItemDetail itemsDetail={infoDetail}/>
        </div>
    );
}
export default ItemDetailContainer;