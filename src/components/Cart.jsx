import { useContext, React } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom'
import { collection, serverTimestamp, setDoc, doc, updateDoc, increment} from 'firebase/firestore'
import db from '../utils/firebaseConfig'

const Cart = () => {

    const test = useContext(CartContext);

    const createOrder = () =>  {
        const itemToBuy = test.cartList.map( item => ({
            id: item.idItem,
            title: item.titleItem,
            price: item.priceItem,
            qty: item.quantityItem
        }));

        test.cartList.forEach(async (item) => {
            const itemGonne = doc(db, "products", item.idItem);
            await updateDoc(itemGonne, {
              stock: increment(-item.qtyItem)
            });
          });

        let order = {
            buyer : {
                name: "Gabriel Mars",
                email: "marsg@gmail.com",
                phone: "4719415",
            },
            items : itemToBuy,
            date: serverTimestamp(),
            total: test.totalPrice()
        }
        const printOrderToFb = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
        printOrderToFb()
        .then(result => alert("Su orden ha sido creada, con el ID \n" + result.id))
        .catch(err => console.log(err))

        test.clear()

}   

    return (
        <div>
            <div className='row'>
                <div className='col-5'>
                    <h1 className='titleCarro'>Tus Productos</h1>
                    {
                        (test.cartList.length>0) ? <button className='btn-primary m-1' onClick={test.clear}>Borrar toda la selección</button>
                        : <h3>No hay productos seleccionados</h3>
                    }
                    <Link to="/"><button className='btn-primary m-1'>Seguir seleccionando</button></Link>
                </div>
                <div className='resumenCarro col-4'>
                    <h3 className='m-3'> Costo de Selección </h3>
                    <p><b>Total Parciales: $ </b>{test.subTotal()}</p>
                    <p><b>Envío: $ </b>100</p>
                    <p><b>Dto 1stBuy 15%: $ </b>- {test.cuponPrice()} </p>
                    <hr/>
                    <h5 className='m-3'><b>Total: $ </b> {test.totalPrice()}</h5>
                    <button onClick={createOrder} className='btn-primary m-1'>Terminar Compra</button>
                </div>
            </div>
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
                                            <p className='m-3'><b>Precio parcial: $ </b> {test.partialProduct(item.idItem)}</p>
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