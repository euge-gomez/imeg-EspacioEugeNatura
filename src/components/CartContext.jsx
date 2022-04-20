import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

     const [cartList, setCartList] = useState([]);

     const cantidadTotal = () =>

        cartList.reduce((acum, element) => (acum += element.quantity), 0);

     const addToCart = (item, quantity) => {
         let previo = cartList.find(element => element.id === item.id);
         if(previo === undefined) {
            setCartList([
                ...cartList, 
                item
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
        <CartContext.Provider value={{cartList, addToCart, clear, borrarProducto, cantidadTotal}}>
            {children}
        </CartContext.Provider>
    ); 
}

export default CartContextProvider;



