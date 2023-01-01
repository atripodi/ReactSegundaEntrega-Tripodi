// componente que se encarga de llamar a los productos

import { useState, useEffect } from "react"
// import { getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemListContainer = () => {

    const [products, setProducts] = useState([]) // creo un estado para guardar los rdos de la consulta
    const [loading, setLoading] =useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect (() =>{

        const collectionRef = categoryId
                ? query(collection(db, "products"), where("category", "==", categoryId))
                : collection(db, "products")

        getDocs(collectionRef).then(response => {
            console.log(response)

            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })

            setProducts(productsAdapted)
        }).catch(error => {console.log(error) 
        }).finally(setLoading (false))






    // if (!categoryId){ 
    //     console.log(getProducts()) // retorna una promesa
    //     getProducts().then (res => {
    //         console.log (res) 
    //         setProducts(res) // guardo los rdos en el state
    //     }).catch (error => {
    //         console.log(error) 
    //     }).finally(
    //         setLoading (false)
    //     )  
    //     } else {
    //         getProductsByCategory(categoryId).then (res => {
    //             console.log (res) 
    //             setProducts(res) 
    //         }).catch (error => {
    //             console.log(error) 
    //         }).finally(
    //             setLoading (false)
    //         )
    //     }
    },[categoryId])

    if (loading){
        return <h1> Loading..</h1>
    }

    return (
        <div>
            <ItemList products = {products}/> 
        </div>
    )
}

export default ItemListContainer

