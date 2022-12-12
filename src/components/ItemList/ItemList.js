// Este componente se encarga de retornar los productos que recibe por props
import { Link } from "react-router-dom"
// import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <ul style={{display: 'flex', flexDirection:'column'}}> 
            {products.map(product => <Link to={`/detail/${product.id}`} key={product.id}>{product.name}</Link>)}
        </ul>
    )
}

export default ItemList
