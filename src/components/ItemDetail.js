import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({itemsDetail}) => {

    const onAdd = (quantity) => {
        alert('Has seleccionado ' + quantity +' '+ itemsDetail.title)
    }
    console.log(itemsDetail)
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
                        <ItemCount stock={itemsDetail.stock} initial={1} onAdd={onAdd}/>
                    </div>
                    <img className="m-2 col-5 imgDetail" src={itemsDetail.img} alt="Card cap" style={{width:"15vw"}}/>
                </div>
            </div> 
        </>
    );
}

export default ItemDetail;