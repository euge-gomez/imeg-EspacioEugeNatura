import React from 'react';
import Item from './Item'

const ItemList = ({elements}) => {
    return(
        <div className="container">
            <div className="row">
                {elements.length > 0 ?
                    elements.map((elem) => 
                    <Item key={elem.id} title={elem.title} img={elem.img} />) 
                    : <p>Buscando información...</p>
                }
            </div>
        </div>
    );
}

export default ItemList;