import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

     const [cartList, setCartList] = useState([]);

     const addToCart = (item, quantity) => {
         let previo = cartList.find(element => element.id === item.id);
         console.log(item)
         if(previo === undefined) {
            setCartList([
                ...cartList, 
                {
                    idProducto: item.id,
                    imgProducto: item.img,
                    titleProducto: item.title,
                    priceProducto: item.price,
                    quantityProducto: item.quantity
                }
            ])
        } else {
            previo.quantity += quantity;
            }   
     }

     const clear = () => {
         setCartList([])
     }   

     const borrarProducto = (idRemantente) => {
         let remanenteCarro = cartList.filter(element => element.id !== idRemantente);
         setCartList(remanenteCarro);
     }

    return(
        <CartContext.Provider value={{cartList, addToCart, clear, borrarProducto}}>
            {children}
        </CartContext.Provider>
    ); 
}

export default CartContextProvider;



