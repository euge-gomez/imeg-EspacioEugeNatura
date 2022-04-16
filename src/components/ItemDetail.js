import React from 'react';
import ItemCount from './ItemCount';
import {useState} from 'react'
import CheckOut from './CheckOut'

const ItemDetail = ({itemsDetail}) => {

    const [itemCount, setItemCount] = useState(0);

    const onAdd = (quantity) => {
        alert('Has seleccionado ' + quantity +' '+ itemsDetail.title);
        setItemCount(quantity)

    }
    
    return(
        <>
            <div className="container">
                <div className="row" key={itemsDetail.id}>
                    <div className='col-6 m-4'>
                        <h2 className="card-title">{itemsDetail.title}</h2>
                        <h6><em>{itemsDetail.descrip}</em></h6>
                        <h4> {itemsDetail.quantity}</h4>
                        <h3>${itemsDetail.price}</h3> 
                        <h5><em>Stock:</em> {itemsDetail.stock}</h5>
                        {
                            itemCount === 0 ?
                            <ItemCount stock={itemsDetail.stock} initial={itemCount} onAdd={onAdd}/> :
                            <CheckOut/>
                        }
                    </div>
                    <img className="m-2 col-5 imgDetail" src={itemsDetail.img} alt="Card cap" style={{width:"15vw"}}/>
                </div>
            </div> 
        </>
    );
}

export default ItemDetail;