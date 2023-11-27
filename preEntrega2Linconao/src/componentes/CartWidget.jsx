import { useCartContext } from "./context/CartContext"

const CartWidget = () => {
  const {totalQuantity} = useCartContext()
  return (
    <div>
      {totalQuantity() !=0 ? <p className="carrito">{totalQuantity()}🛒</p>
      :
      <p>🛒</p>
      }
    </div>
  )
}

export default CartWidget
