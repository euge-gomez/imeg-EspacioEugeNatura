import React from 'react';
import hamburguer from './images/192-menu3.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <> 
        <nav class="m-3 navbar navbar-expand-lg col-lg-8 col-md-9 col-sm-9 head__nav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"><img src={hamburguer} alt="icono menu hamburguesa"/></span>
                </button>
                <div className="collapse navbar-collapse head__nav" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
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
        <div className='col-3 m-3 rrss'>
        <ul class="foot__navrrss">
                        <li><a href="https://api.whatsapp.com/send?phone=005493513092934"><img className="img-fluid" alt="logo wa" src="https://cdn-icons-png.flaticon.com/512/1383/1383269.png"/></a></li>
                        <li><a href="https://www.instagram.com/eugeqca/"><img className="img-fluid" alt="logo ig" src="https://cdn-icons-png.flaticon.com/512/408/408707.png"/></a></li>
                        <li><a href="mailto:eugequimica@gmail.com"><img className="img-fluid" alt="logo mail" src="https://cdn-icons.flaticon.com/png/512/2875/premium/2875394.png?token=exp=1651375751~hmac=1957a623ffedfce633f176c5dde4e794"/></a></li>
                    </ul>
        </div>
        </>
    );
}
export default Footer;