import ItemCounter from "./ItemCount"


const ItemDetail = ({product}) => {

    const onAdd = cant => {
        console.log('cantidad seleccionada', cant)
        agregarAlCarrito({...product, cant})
    }
    return (
        <div className="container row">
            <div className="detalle-producto col-6 mt-5">
                <img src={product.image.url} alt={product.name} className="img-fluid"/>
                <div>
                    <h3 className="name">Nombre:{product.name}</h3>
                    <p className="category">Categoria: {product.category}</p>
                    <p className="price">${product.price}</p>
                    <ItemCounter initial={1} stock={5} onAdd={onAdd} />
                </div>
            </div>

        </div>
    )
}

export default ItemDetail