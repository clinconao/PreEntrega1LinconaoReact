import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "./ItemDetail"
import { mFetch } from "../helpers/mFetch"



export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { pid } = useParams()

    useEffect(() => {
            mFetch(pid)
            .then(resultado => setProduct(resultado))
            .catch(error=>console.log(error))
    }, [])


    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}
