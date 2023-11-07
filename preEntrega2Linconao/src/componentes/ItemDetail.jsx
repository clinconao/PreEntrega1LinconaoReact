import ItemCounter from "./ItemCount"

const ItemDetail = ({product}) => {

    const onAdd = cant =>{
        console.log('cantidad seleccionada')
    }
    return (
        <div className="container">
            <div className="detalle-producto">
                <img src={product.image} alt={product.name} />
                <div>
                    <h3 className="name">{product.name}</h3>
                    <p className="category">Categoria: {product.category}</p>
                    <p className="price">${product.price}</p>
                    <ItemCounter initial={1} stock={5} onAdd={onAdd} />
                </div>
            </div>

        </div>
    )
}

export default ItemDetail