import { products } from "../data/Products"

export const pickRandomProducts = (cantidad) => {
    const newArray = []

    while(newArray.length < cantidad){
        const indexRandom = Math.floor(Math.random() * products.length)
        //si el array esta vacio directamente guardamos el producto con su indice
        if(!newArray.length){
            newArray.push(products[indexRandom])
        }
        //busca un producto
        const productoExistente = newArray.find((newProduct) => {
            return newProduct.id === products[indexRandom].id
        })
        //si no existe guardamos
        if(!productoExistente){
            newArray.push(products[indexRandom])
        }
    }
    return newArray
}