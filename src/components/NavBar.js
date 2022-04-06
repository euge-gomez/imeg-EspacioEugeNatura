import React from 'react';
import logo from './images/logo.png'
import hamburguer from './images/192-menu3.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <> {/*Todas las paginas estan referenciadas a inicio porque no tengo pages aun*/}
        <img className="m-4 rounded logoEEN" src={logo} alt="Logo del EEN"/>
        <nav class="m-3 navbar navbar-expand-lg col-lg-6 col-md-9 col-sm-9 head__nav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"><img src={hamburguer} alt="icono menu hamburguesa"/></span>
                </button>
                <div className="collapse navbar-collapse head__nav" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="../../public/index.html">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="../../public/index.html">Ciclo Actual</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../../public/index.html">Contacto</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="../../public/index.html">Online</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="../../public/index.html">Pronta Entrega</a>
                      </li>
                  </ul>
                </div> 
        </nav>
        <CartWidget/>
        </>
    );
}
export default NavBar;