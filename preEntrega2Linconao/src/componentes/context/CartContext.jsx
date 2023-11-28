import { createContext, useContext, useState } from "react"

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    
    const agregarAlCarrito = (product) => {
        const productIndex = cartList.findIndex(prod => prod.id === product.id)
        if (productIndex === -1) {
            setCartList([
                ...cartList,
                product
            ])
        } else {
            cartList[productIndex].cant += product.cant 
            setCartList([...cartList])
        }


    }

    const totalProducts = () => cartList.reduce((total, product)=> total += product.cant ,0 )
    const totalPrice = () => cartList.reduce((total, productObjet) => total = total + (productObjet.price * productObjet.cant) , 0 )
    const removeProduct = (pid) => {
        setCartList(cartList.filter(product => product.id !== pid))
    }


    const vaciarCarrito = () =>{
        setCartList([])
    }
    
    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito, 
            totalPrice,
            totalProducts,
            removeProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}