import { useState } from 'react'
import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <ItemListContainer greeting='Tu tienda del sur'/>
    </>
  )
}

export default App
