import { useState } from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ButtonVaciar from './components/Buttons/ButtonVaciar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';
import ProductDetail from './components/ProductDetail/ProductDetail'

function App() {
  const [TotalCarrito, setTotalCarrito] = useState(0);

  return (
    <>
      <NavBar TotalCarrito={TotalCarrito} />
      <div className="header-container">
        <ButtonVaciar text="Vaciar carrito" fn2={setTotalCarrito} />
      </div>

      <Routes>
        <Route 
          exact path='/' element={
            <>
              <Banner />
              <Home/>
            </> }
        />
        <Route 
          exact path='/market' element={
          <ItemListContainer fn={setTotalCarrito} TotalCarrito={TotalCarrito} />}
        />
        <Route 
          exact path='/contact' element={
          <h1>Página en mantenimiento...</h1>}
        />
        <Route exact path='/product/:id' element={<ProductDetail fn={setTotalCarrito} TotalCarrito={TotalCarrito}/>}/>
        <Route exact path='*' element={
          <h1>404: Página no encontrada</h1>}
        />
      </Routes>
    </>
  );
}

export default App;