import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import MyProvider from './components/context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';



function App() {
  return (
    <BrowserRouter>
      <MyProvider>
      <div className='App'>
            <NavBar/>
      <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout/:orderId" element={<Checkout/>}/>
          <Route path="/*" element={<Navigate to='/' replace /> } />
      </Routes>
          </div>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
