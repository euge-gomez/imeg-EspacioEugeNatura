import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
    return(
        <div className="container">
            <div className="row">
                {
                    items.map((elem) => 
                    <Item id={elem.id} title={elem.title} img={elem.img} />)    
                }
            </div>
        </div>
    );
}

export default ItemList;