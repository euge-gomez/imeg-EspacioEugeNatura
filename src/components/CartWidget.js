import React, {useContext} from 'react';
import {Badge} from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import {Link} from 'react-router-dom';
import { CartContext } from './CartContext';


const CartWidget = () => {
    const test = useContext(CartContext)
   
    return(
        <Badge badgeContent={test.totalQuantity()} color="primary">
            <Link to="/cart"><ShoppingCartOutlined/></Link>
        </Badge>
    )};

    export default CartWidget;