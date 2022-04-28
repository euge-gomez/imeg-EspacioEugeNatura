import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import {goGetfromFb} from '../utils/getFromFirebase'

const ItemListContainer = () => {

    const[info, setInfo] = useState([]);
    const {idFiltrado} = useParams();
    
    useEffect(() => {
        goGetfromFb(idFiltrado)
            .then(result => setInfo(result))
            .catch(err => console.log(err));
    }, [idFiltrado])

    useEffect(() => {
        return(() => {
            setInfo([]);
        })
    }, []);

    return(
        <div> 
            <ItemList items={info}/>
        </div>
    );
}

export default ItemListContainer;