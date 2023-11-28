import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';

import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar';

import { ItemDetailContainer } from './componentes/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CartContextProvider } from './componentes/context/CartContext';
import { CartContainer } from './componentes/CartContainer/CartContainer';

function App() {


  return (

    <CartContextProvider>
          <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='World-KPopTemuco' />} />
          <Route path='/detail/:pid' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/category/:cid' element={<ItemListContainer />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
    </CartContextProvider>

  )
}

export default App