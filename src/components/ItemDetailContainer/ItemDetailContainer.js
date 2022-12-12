import { useEffect, useState} from "react"
import { getProduct } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () =>{

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)


    console.log(useParams())
    const { productId} = useParams()

    useEffect(() =>{
        getProduct(productId).then(response => {
            setProduct(response)
        }).finally(()=> {
            setLoading(false)
        })

    }, [])

    console.log(product)

    if (loading) {
        return <h1>Loading</h1>
    }

    return (
         <div>
            <h4>detalle de producto {product.name}</h4>
            <ItemDetail {...product}/>
         </div>
    )
}

export default ItemDetailContainer