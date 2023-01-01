import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) =>{

    const [ cart, setCart] = useState ([]) 
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)
    console.log (cart)

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    
    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            console.log("Ya está agregado")
        }
    }
    
    const removeItem = (id) =>{
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
    }

    const getTotalQuantity = () =>{
        let totalQuantity = 0

        cart.forEach(prod =>{
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const getTotal = () =>{
        let accu= 0
        cart.forEach(prod =>{
            accu += prod.quantity * prod.price
        })

        return accu
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)
        return product?.quantity
    }

    const clearCart =() =>{
        setCart([])
    }

    useEffect(() =>{
        const totalQuantity = getTotalQuantity()
        setTotalQuantity(totalQuantity)
    }, [cart])
    
    useEffect(() =>{
        const total = getTotal()
        setTotal(total)
    }, [cart])
    
    return (
        <CartContext.Provider value={{ cart, addItem,removeItem, totalQuantity, total, clearCart, getProductQuantity}}>
            {children}
        </CartContext.Provider>
        
    )
}