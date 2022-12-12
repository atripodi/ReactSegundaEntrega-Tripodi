// componente para mostrar cada item dentro de ItemList

import { Link } from "react-router-dom"

const Item = ({prod}) => {

    return (
        <div>
            {/* <div className="product-img"> 
                        <img src="{prod.img}"></img>
            </div> */}
            <div class="product-name">
                        <h5>{prod.name}</h5>
                    </div>
                    <div className="description">
                        <p>{prod.description}</p>
                    </div> 
                    <div class="product-price">
                        <span className="price">${prod.price}</span>
                    </div>
        </div>
    )

}

export default Item