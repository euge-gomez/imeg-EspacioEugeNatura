import React from 'react';
import logo from './images/logo.png'
import hamburguer from './images/192-menu3.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <> 
        <Link to='/'><img className="m-4 rounded logoEEN" src={logo} alt="Logo del EEN"/></Link>
        <nav class="m-3 navbar navbar-expand-lg col-lg-8 col-md-9 col-sm-9 head__nav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"><img src={hamburguer} alt="icono menu hamburguesa"/></span>
                </button>
                <div className="collapse navbar-collapse head__nav" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item m-1">
                      <Link to='/filtro/1' className="nav-link">Perfumería</Link>
                    </li>
                    <li className="nav-item m-1">
                      <Link to='/filtro/2' className="nav-link">Chronos</Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link to='/filtro/3' className="nav-link">Todo Día</Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link to='/filtro/4' className="nav-link">Una</Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link to='/filtro/5' className="nav-link">Ekos</Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link to='/filtro/6' className="nav-link">Faces</Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link to='/filtro/10' className="nav-link">Erva Doce</Link>
                    </li>
                  </ul>
                </div> 
        </nav>
        <CartWidget/>
        </>
    );
}
export default NavBar;