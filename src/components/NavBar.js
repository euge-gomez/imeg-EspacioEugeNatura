import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const NavBar = () => {
    return (
        <> {/*Todas las paginas estan referenciadas a inicio porque no tengo pages aun*/}
        <nav class="navbar navbar-expand-lg col-lg-9 col-md-12 col-sm-12 head__nav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"><img src="images/192-menu3.png" alt="icono menu hamburguesa"/></span>
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
        </>
    );
}
export default NavBar;