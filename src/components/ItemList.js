import React from 'react';
import Item from './Item';

const ItemList = ({info}) => {
    return(
        <div className="container">
            <div className="row">
                {info.img ?
                    info.map((elem) => 
                    <Item key={elem.id} title={elem.title} img={elem.img} />) 
                    : <p>Buscando información...</p>
                }
            </div>
        </div>
    );
}

export default ItemList;