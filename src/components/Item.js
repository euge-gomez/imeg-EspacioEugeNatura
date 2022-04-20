import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

const Item = ({id, title, img}) => {
    return(
        <>
            <div className="card m-3 d-flex align-items-center" key={id} style={{width: 180}}>
                <img className="card-img-top m-2 imgItem" src={img} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <Link to={`/producto/${id}`}><button className='btn-primary'>Ver Detalles</button></Link>
                </div>
            </div>
        </>
        
    );
    

};


export default Item;