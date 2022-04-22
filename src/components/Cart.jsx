import { useContext } from 'react';
import { CartContext } from './CartContext';
import {Link} from 'react-router-dom';

const Cart = () => {

    const test = useContext(CartContext);

    return (
        <div>
            <h1 className='m-3'>Tus productos seleccionados</h1>
            {
                (test.cartList.length>0) ? <button className='btn-primary m-3' onClick={test.clear}>Borrar toda la selección</button>
                : <h3>No hay productos seleccionados</h3>
            }
            <Link to="/"><button className='btn-primary m-3'>Seguir seleccionando</button></Link>
            {
                test.cartList.length > 0 && (
                    <div>
                        {
                            test.cartList.map(item =>
                                <div  className='row itemCart' key={item.idItem} id={item.idItem}>
                                    <img className="m-3 col-3" src={item.imgItem} alt="img" style={{width: "5vw"}}/>
                                    <div className='col-9 m-3'>
                                        <span className='d-flex justify-content-between '>
                                            <p className='m-3'><b>Producto:</b>  {item.titleItem}</p>
                                            <p className='m-3'>{item.quantityItem} <b>producto(s)</b></p>
                                            <p className='m-3'><b>$</b> {item.priceItem} <b>cada uno</b></p>
                                            <button className='btn-primary h-1 deleteItem m-3' onClick={() => test.deleteItem(item.idItem)}>Borrar Producto</button>
                                            <hr/>
                                        </span>
                                    </div>  
                                </div>
                                )
                        }
                    </div>
                )
            }
        </div>
    );
}

export default Cart;