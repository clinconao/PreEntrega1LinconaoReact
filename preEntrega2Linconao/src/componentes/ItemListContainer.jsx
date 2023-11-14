import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import { mFetch } from "../helpers/mFetch"
import { ItemList } from "./ItemList"


const ItemListContainer = ({ greeting = "Bienvenido a nuestra tienda" }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { cid } = useParams()

    useEffect(() => {
        if (cid) {
            mFetch()
                .then(resultado => setProducts(resultado.filter(product => product.category === cid)))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        } else {
            mFetch()
                .then(resultado => setProducts(resultado))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        }

    }, [cid])           

    return (
        <>
        <center>
            <h1>{greeting}</h1>
        </center>

                {loading ? <h2>Cargando...</h2> 
                :
                    <ItemList products={products} />
                    }
        </>
    )
}

export default ItemListContainer