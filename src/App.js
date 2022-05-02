import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './components/Cart'
import CartContextProvider from './components/CartContext'
import Footer from "./components/Footer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar/>
          </header>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/filtro/:idFiltrado' element={<ItemListContainer/>}/>
            <Route path='/producto/:idProducto' element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          <div className="App-header">
          <Footer/>
          </div>
        </div>
      </BrowserRouter>
   </CartContextProvider>
  );
}

export default App;
