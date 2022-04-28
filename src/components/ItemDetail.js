
import ItemCount from './ItemCount';
import {useContext, useState, React} from 'react'
import CheckOut from './CheckOut'
import { CartContext } from './CartContext';


const ItemDetail = ({item}) => {

    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext)

    const onAdd = (quantity) => {
        alert('Has seleccionado ' + quantity +' '+ item.title);
        setItemCount(quantity);
        test.addToCart(item, quantity);
    }
    
    return(
        <>
            <div className="container">
                <div className="row" key={item.id}>
                    <div className='col-6 m-4'>
                        <h2 className="card-title">{item.title}</h2>
                        <h6><em>{item.descrip}</em></h6>
                        <h4> {item.quantity}</h4>
                        <h3>${item.price}</h3> 
                        <h5><em>Stock:</em> {item.stock}</h5>
                        {
                             itemCount === 0 ?
                            <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/> :
                            <CheckOut/>
                        }
                    </div>
                    <img className="m-2 col-5 imgDetail" src={item.img} alt="Card cap"/>
                </div>
            </div> 
        </>
    );
}

export default ItemDetail;