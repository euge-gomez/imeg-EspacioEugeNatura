import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from './components/CartContext';
import Cart from './components/Cart'

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
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
