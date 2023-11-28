import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"

import ItemDetail from "./ItemDetail"
import { Loading } from "./Loading"



export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { pid } = useParams()
    const [ isLoading, setIsLoading] = useState(true)



    //    traer uno

    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'products', pid)
        getDoc(queryDoc)
            .then(res => setProduct({ id: res.id, ...res.data() }))
            .catch(err => console.log(err))
            .finally(() => setIsLoading (false))
    }, [])


    return (
        <div>
            {
                isLoading ? 
                <Loading/>
                :
                <ItemDetail product={product} />
            }
            
        </div>
    )
}
