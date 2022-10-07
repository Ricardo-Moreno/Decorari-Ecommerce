import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({children}) => {

    const [ cart, setCart ] = useState([])

// Metodo sam - indica si el producto agregado al carrito, ya existe o no en cart
const isIntCart = (id) => {
    return cart.some(x => x.id === id )
}
// Agrega prodcuto al carrito sin pisar los productos ya existentes
const addItem = (item, count) => {

    const newItem = {
        ...item,
        count
    }

    console.log(newItem)

    if(isIntCart(newItem.id)){
        const findProduct = cart.find(x => x.id === newItem.id)
        const productIndex = cart.indexOf(findProduct)
        const auxArray = [...cart]
        auxArray[productIndex].count += count
        setCart(auxArray)
    }else {
        setCart([...cart, newItem])
    }
console.log(setCart)

}
// Borra todos los productos de nuestro Cart Ejemplo se le asigna un boton
const emptyCart = () => {
    return setCart([])
}
// borrar un producto espesifico del carrito Ejemplo : la cruz para eliminar item
const deleteItem = (id) => {
    return setCart(cart.filter(x => x.id !== id))
}
// retorna catidad de unidades que tiene nuestro carrito, diferente al lenght que retorna cantidad de elementos
const getItemQty = () => {
    return cart.reduce((acc, x) => acc += x.count, 0)
}
//
const getItemPrice = () => {
    return cart.reduce((acc, x) => acc += x.price * x.count, 0)
}


return  <Provider value={{cart, isIntCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice }}>{children}</Provider>

}

export default MyProvider