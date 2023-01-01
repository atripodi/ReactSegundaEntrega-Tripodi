import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)

    return (
        <div>
            <i class="fa-solid fa-cart-shopping">{totalQuantity}</i>
        </div> 
    )
}

export default CartWidget