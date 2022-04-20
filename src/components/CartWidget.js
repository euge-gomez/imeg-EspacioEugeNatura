import React from 'react';
import {Badge} from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import {Link} from 'react-router-dom';


const CartWidget = () => {

   
    return(
        <Badge badgeContent={4} color="primary">
            <Link to="/cart"><ShoppingCartOutlined/></Link>
        </Badge>
    );
}
export default CartWidget;