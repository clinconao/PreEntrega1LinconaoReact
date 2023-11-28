import { useState } from "react"
import { useCartContext } from "../context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { Link } from "react-router-dom"

export const CartContainer = () => {

    const { cartList, vaciarCarrito, totalPrice, removeProduct } = useCartContext()

    const [isId, setisId] = useState('')
    const [formData, setformData] = useState({
        name: '',
        phone: '',
        email: ''
    });



    const handleOrders = (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = formData

        order.items = cartList.map(({ id, price, cant, name }) => ({ id: id, price: price, name: name, cant: cant }))
        order.total = totalPrice()


        const db = getFirestore()

        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
            .then(({ id }) => setisId(id))
            .catch(err => console.log(err))
            .finally(() => {
                setformData({
                    name: '',
                    phone: '',
                    email: ''
                })
                vaciarCarrito()

            })
    }

    const handleOnChange = (evt) => {
        setformData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }


    return (

        <>
            {isId !== '' &&
                <h2>El track ID de la compra es {isId}</h2>
            }
            {cartList.length == 0 ?

                <>
                    <h2>No hay productos en el carro</h2>
                    <Link to='/'> <button className="btn btn-outline-success">Agrega productos a tu carro</button></Link>
                </>

                :
                <div className="w-100 text-center">
                    {cartList.map(product =>
                        <div key={product.id}>
                            <img className="w-25" src={product.imageUrl} alt="image" />

                            Producto:{product.name} - Precio: {product.price} - Cantidad:{product.cant}
                            <button className="btn btn-danger" onClick={() => removeProduct(product.id)} >Eliminar del carro</button>
                            <hr />

                            {totalPrice() != 0 && <h2>Total compra: {totalPrice()}</h2>}
                            <br />
                            <button className="btn btn-outline-danger" onClick={vaciarCarrito}>
                                Vaciar carrito
                            </button>

                            <br />
                            <form onSubmit={handleOrders} className="text-center form-control">
                                <label placeholder="Escribe tu nombre">
                                    Ingresar nombre
                                </label>
                                <input className="form-control" type="text" name="name" required onChange={handleOnChange} value={formData.name} />

                                <label placeholder="Telefono">
                                    Ingresar Telefono
                                </label>
                                <input className="form-control" type="number" name="phone" required onChange={handleOnChange} value={formData.phone} />

                                <label placeholder="Escribe tu email">
                                    Ingresar Email
                                </label>
                                <input className="form-control" type="email" name="email" required onChange={handleOnChange} value={formData.email} />

                                <button className="btn btn-outline-success" onClick={handleOrders}>
                                    Proceder al pago
                                </button>
                            </form>
                        </div>)}
                </div>
            }
        </>
    )
}