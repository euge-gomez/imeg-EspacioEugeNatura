import { createContext, useState, React } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addToCart =(item, quantity)=> {
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.img,
                    titleItem: item.title,
                    priceItem: item.price,
                    quantityItem: quantity
                }]);
        } else {
            found.quantityItem += quantity;
        }
    }

    // Botones generales de borrado total e individual

    const clear =()=> {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
    }

    // Calculo del total de articulos para el CartWidget

    const totalQuantity = () => {
        let cantidades = cartList.map(item => item.quantityItem);
        return cantidades.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    // Calculo de precios parciales de cada producto

    const partialProduct = (idItem) => {
        let idProduct = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[idProduct].priceItem * cartList[idProduct].quantityItem;
    } 

    // Funciones para el resumen de la compra

    const subTotal = () => {
        let partials = cartList.map(item => partialProduct(item.idItem));
        return partials.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const cuponPrice = () => {
        return subTotal() * 0.15
    }

    const totalPrice = () => {
        return subTotal()-cuponPrice()+100;
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, clear, deleteItem, totalQuantity, partialProduct, subTotal, cuponPrice, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider