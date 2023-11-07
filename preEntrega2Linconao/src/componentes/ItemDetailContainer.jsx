import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemCounter from "./ItemCount"
import mFetch, { mFetchId } from "../helpers/mFetch"
import ItemDetail from "./ItemDetail"



export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { pid } = useParams()

    useEffect(() => {
        mFetchId(pid)
        .then(result=>setProduct(result))
        .catch(error=>console.log(error))
    })


    return (
        <div className="row">
            <ItemDetail product={product} />
        </div>
    )
}
