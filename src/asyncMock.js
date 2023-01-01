const products = [
    {
        id: "1",
        name: "Taza serie 001",
        description: "Taza de cerámica realizada a mano en torno alfarero esmaltada jaspeada.",
        dimensiones: "Dimensiones: xcm alto x xcm Ø",
        price: 350,
        stock:1,
        category: "ceramica",
        img: "/appv2/public/img/item1.jpeg"
    },
    {
        id: "2",
        name: "Jarra serie 001",
        description: "Mini jarra de cerámica realizada a mano en torno alfarero esmaltada color blanco.",
        dimensiones: "Dimensiones: xcm alto x xcm Ø",
        price: 430,
        stock:2,
        category: "ceramica"  
    },

    {
        id: "3",
        name: "Cuaderno 001",
        description: "Cuaderno hecho a mano artesanalmente costura tradicional",
        dimensiones: "Dimensiones: xcm alto x xcm Ø",
        price: 250,
        stock:4,
        category: "cuadernos"  
    },
    {
        id: "4",
        name: "Servicio de enmarcación",
        description: "Enmarcados hechos a mano por encargo. Buscamos la mejor opción para resaltar tu obra. Contactános!",
        dimensiones: "Dimensiones: xcm alto x xcm Ø",
        price: 700,
        stock:4,
        category: "enmarcados"  
    }
]

//simulación de la promesa, devuelvo los productos

// export const getProducts = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout (()=> {
//             resolve (products)
//         },2000)
//     })
// }





export const getProduct = (id) => {
    return new Promise ((resolve, reject)=> {
        setTimeout (()=> {
            resolve (products.find(product => product.id === id))
        },2000)
    })
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise ((resolve, reject)=> {
        setTimeout (()=> {
            resolve (products.filter(product => product.category === categoryId))
        },1500)
    })
}