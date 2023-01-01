import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {

    const {cart, clearCart, total, totalQuantity} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <h4>No hay items en el carrito</h4>
        )
    }

    return (
    <div>
        <h3>Carrito</h3>
        {cart.map(p =><CartItem key={p.id} {...p}/>)}
        <h4> Total: ${total}</h4>
        <button onClick={()=>clearCart}>Limpiar carrito</button>
        <Link to="/checkout">Finalizar compra</Link>
    </div>)
}

export default Cart