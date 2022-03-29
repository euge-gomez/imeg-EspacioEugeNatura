import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar/>
      </header>
      <ItemListContainer greeting='Bienvenidos a mi Espacio Natura'/>
    </div>
  );
}

export default App;
