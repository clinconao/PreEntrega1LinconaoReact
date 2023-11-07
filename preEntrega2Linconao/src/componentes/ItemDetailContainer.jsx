import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemCounter from "./ItemCount"
import mFetch, { mFetchId } from "../helpers/mFetch"
import ItemDetail from "./ItemDetail"



export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { pid } = useParams()
    const { cid } = useParams()

    useEffect(() => {
        if (cid) {
            mFetch()
            .then(resultado => setProducts(resultado.filter(product => product.category === cid)))
            .catch(error=>console.log(error))
            .finally(()=> setLoading(false))
        }else{
        mFetchId()
        .then(resultado=>setProducts(resultado))
        .catch(error=>console.log(error))
        .finally(() =>setLoading(false  ))
    }
    }, [cid])


    return (
        <div className="row">
            <ItemDetail product={product} />
        </div>
    )
}
