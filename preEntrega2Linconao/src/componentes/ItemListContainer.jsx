import { useEffect, useState } from "react"
import mFetch from "../helpers/mFetch"
import { ItemList } from "./ItemList"


export const ItemListContainer = ({ greeting = "Bienvenido a nuestra tienda" }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        mFetch()
            .then(resultado => setProducts(resultado))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <center>
                <h1>{greeting}</h1>
            </center>
            <div className="d-flex justify-content-center align-items-center">

                {loading ? <h2>Cargando...</h2> 
                :
                    <ItemList products={products} />
                    }
            </div>
        </>
    )
}

export default ItemListContainer