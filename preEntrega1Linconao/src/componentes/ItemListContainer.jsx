
export const ItemListContainer = ({greeting = "Bienvenido a nuestra tienda"}) => {
    return (
        <center>
            <h1>
            {greeting}
            </h1>
        </center>
    )
}

export default ItemListContainer