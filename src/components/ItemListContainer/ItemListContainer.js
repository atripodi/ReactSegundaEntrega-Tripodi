// componente que se encarga de llamar a los productos

import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../../asyncMock"

const ItemListContainer = () => {

    const [products, setProducts] = useState([]) // creo un estado para guardar los rdos de la consulta
    const [loading, setLoading] =useState(true)

    const { categoryId } = useParams()

    useEffect (() =>{
    if (!categoryId){ 
        console.log(getProducts()) // retorna una promesa
        getProducts().then (res => {
            console.log (res) 
            setProducts(res) // guardo los rdos en el state
        }).catch (error => {
            console.log(error) 
        }).finally(
            setLoading (false)
        )  
        } else {
            getProductsByCategory(categoryId).then (res => {
                console.log (res) 
                setProducts(res) 
            }).catch (error => {
                console.log(error) 
            }).finally(
                setLoading (false)
            )
        }
    },[categoryId])

    console.log(products)

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

