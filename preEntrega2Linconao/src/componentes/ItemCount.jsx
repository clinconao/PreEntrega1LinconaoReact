import { Stack } from "react-bootstrap"
import useCounter from "./hooks/useCounter"




const ItemCounter = ({ initial = 1, stock = 10, onAdd }) => {
    const { count, handleCounter, handleCounterLess } = useCounter(initial, stock)


    const handleOnAdd = () => {
        onAdd(count)
    }

    return (
        <div className="text-center flex">
            <Stack direction="horizontal" className="flex" gap={3}>         
                <button className="btn btn-outline-danger w-100" onClick={handleCounterLess}> - </button>
                <p>{count}</p>                
                <button className="btn btn-outline-success w-100" onClick={handleCounter}> + </button>
            </Stack>
            <button className="btn btn-outline-success w-100" onClick={handleOnAdd}>Agregar al carrito</button>
            <div>


            </div>
        </div>
    )

}
export default ItemCounter