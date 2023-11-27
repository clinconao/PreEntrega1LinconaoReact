import { useState } from "react";
import ItemCounter from "./ItemCount"
import { useCartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({ product }) => {
    const [isCount, setIsCount] = useState(true)
    const { agregarAlCarrito } = useCartContext()

    const onAdd = cant => {
/*         console.log('cantidad seleccionada', cant) */
        agregarAlCarrito({ ...product, cant })
        setIsCount(false)
    }



    return (
        <div className="container row">
            <div className="detalle-producto col-6 mt-5">
                <img src={product.imageUrl} alt={product.name} className="img-fluid" />
                <div>
                    <h3 className="name">Nombre:{product.name}</h3>
                    <p className="category">Categoria: {product.category}</p>
                    <p className="price">${product.price}</p>
                    {
                        isCount ?
                            <ItemCounter initial={1} stock={5} onAdd={onAdd} />
                            :
                            <>                    
                            <Link className="btn btn-outline-dark" to='/cart' >
                                Ir al carro
                            </Link>
                                <Link className="btn btn-outline-success" to='/' >
                                    Seguir comprando
                                </Link></>

                    }

                </div>
            </div>

        </div>
    )
}

export default ItemDetail