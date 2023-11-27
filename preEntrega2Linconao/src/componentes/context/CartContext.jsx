import { createContext, useContext, useState } from "react"

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    
    const agregarAlCarrito = (product) => {

        setCartList([
            ...cartList,
            product
        ])
    }

    const totalPrice = () => cartList.reduce((total, productObjet) => total = total + (productObjet.price * productObjet.cant) , 0 )


    const vaciarCarrito = () =>{
        setCartList([])
    }
    
    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito, 
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}