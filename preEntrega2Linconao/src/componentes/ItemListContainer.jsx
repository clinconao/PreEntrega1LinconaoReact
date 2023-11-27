import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList"
import { Loading } from "./Loading";

const ItemListContainer = ({ greeting = "Bienvenido a nuestra tienda" }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    const { cid } = useParams()

    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'products')

        const queryFilter = cid ? query(queryCollection, where('category', '==', cid)) : queryCollection

        getDocs(queryFilter)
            .then(res => { setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))) })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [cid])

    return (
        <>
            <center>
                <h1>{greeting}</h1>
            </center>
            {loading ?
                <Loading />
                :
                <ItemList products={products} />
            }
        </>
    )
}

export default ItemListContainer