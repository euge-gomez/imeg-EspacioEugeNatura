import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {CartContext} from './CartContext'


const Cart = () => {

    const global = useContext(CartContext);

    console.log('cart', global.cartList)

    return (
    <>
        <div className='text-center'>
            <h1>Tus productos seleccionados</h1>
            {
                global.cartList.length>0 ? <button className='btn-primary m-3' onClick={global.clear}>Borrar toda mi selección</button>
                : <h3>No hay productos seleccionados</h3>
            }
            <Link to="/"><button className='btn-primary m-3'>Seguir seleccionando</button></Link>
        </div>
        
        {
        global.length > 0 && (
            <div className="container">
                {
                global.cartList.map(elem => 
                    <div className="row" key={elem.id} id={elem.id}>
                        <img className="m-2 col-5 imgDetail" src={elem.img} alt="Card cap"/>
                        <div className='col-6 m-4'>
                            <h2 className="card-title">{elem.title}</h2>
                            <h4> {elem.quantity}</h4>
                            <h3>${elem.price} c/u</h3> 
                        </div> 
                    </div> )
                }
            </div>)
        }
    </>
  )
}

export default Cart;