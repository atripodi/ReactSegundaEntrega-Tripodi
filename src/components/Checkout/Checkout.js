import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase";

const Checkout = () =>{

    const {cart, total} = useContext(CartContext)

    const createOrder = () =>{

        const objOrder = {
            buyer: {
                name: "userTest",
                phone: "1234567",
                email: "contactotest@ecommerce.com"
            },
            items: cart,
            total
        }

        const collectionRef = collection(db, "orders")

        console.log(objOrder)
        addDoc(collectionRef, objOrder)
    }

    return (
        <>
            <h1>Checkout</h1>
            <button onClick={createOrder}>Confirmar compra</button>
        </>
    )
}

export default Checkout;