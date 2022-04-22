import { createContext, useState } from 'react';

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

    const clear =()=> {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, clear, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
    
}

export default CartContextProvider