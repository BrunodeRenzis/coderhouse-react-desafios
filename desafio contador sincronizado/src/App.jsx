import './App.css';
import { FooterApp } from './components/FooterApp/FooterApp';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import React from 'react'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar/>
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/categoria/:nombreCategoria' element={<ItemListContainer/>}></Route>
          <Route path='/detalle/:itemId' element={<ItemDetailContainer/>}></Route>
        </Routes>
        
        <FooterApp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
