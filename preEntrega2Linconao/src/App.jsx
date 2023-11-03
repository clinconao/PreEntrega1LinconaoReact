import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './componentes/ItemCount';
import Formulario from './componentes/Formulario';
import { BrowserRouter } from 'react-router-dom';

const onAdd = cant => {
  console.log('Cantidad seleccionada: ', cant)
}

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Tu tienda del sur' />
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      <Formulario/>
      </> 
  )
}

export default App
