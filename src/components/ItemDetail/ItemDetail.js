import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({ id, name, category, description, price, stock }) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const {addItem} = useContext (CartContext)

    const handleOnAdd = (quantity) => {
                console.log("agregué al carrito")
                setQuantityToAdd(quantity)
        
                const productToAdd = {
                    id, name, price, quantity
                }

                addItem(productToAdd)
            }

    return (
        <article>
           <h4>{name}</h4>
           <h5>Precio: ${price}</h5>
            <footer className='ItemFooter'>
                <ItemCount onAdd={handleOnAdd}/>
                <Link to='/cart'>Ver carrito</Link>
            </footer>
        </article>)
}

export default ItemDetail
