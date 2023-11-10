import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';

import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar';
import ItemCount from './componentes/ItemCount';
import Formulario from './componentes/Formulario';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Tu tienda del sur' />} />
          <Route path='/detail/:pid' element={<ItemDetailContainer />} />
          <Route path='/category/:cid' element={<ItemListContainer greeting='Tu tienda del sur' />} />
          <Route path='/formulario' element={<Formulario />} />

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App