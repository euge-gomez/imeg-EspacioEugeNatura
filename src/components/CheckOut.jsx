import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

const CheckOut = () => {
    return(
        <>
           <Link to='/cart'><Button className='btn-primary'>Finalizar Compra</Button></Link>
        </>
    );
}

export default CheckOut;