import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({id, title, img}) => {
    return(
        <>
            <div className="card" key={id} style={{width: 180}}>
                <img className="card-img-top" src={img} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <button className='btn-primary'>Ver Detalles</button>
                    {/* <p className="card-text">{descrip}</p> */}
                </div>
                {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item">{price}</li>
                </ul> */}
            </div>
        </>
    );

};

export default Item;