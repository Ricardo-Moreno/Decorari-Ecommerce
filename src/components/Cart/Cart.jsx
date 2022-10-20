import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css'
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from "react-icons/ai";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useNavigate } from "react-router-dom"
// import { useState } from 'react';



function Cart() {
  const context = useContext(CartContext);
  const { cart, deleteItem, vaciarCarrito, getItemPrice } = context;
  const navigate = useNavigate()
  // const [ orderid, setOrderId ] = useState()


  if (cart.length === 0) {
    return <div className='cartview-emptycard-text'><h1>Tu carrito esta vacio...<Link className='cartview-link-home' to={"/"}>Seguir comprando</Link></h1></div>
  }


  // {buyer: {name, phone, email}, items:[{id, title, price}], total}
function generarOrden(){
  let orden = {}

  orden.buyer= {name: 'Ricardo', phone: '324342342', email: 'ricardo123@gmail.com'}
  orden.total= getItemPrice()

  orden.items = cart.map(cartItem => {
    const id = cartItem.id
    const nombre = cartItem.title
    const precio = cartItem.price * cartItem.cantidad

      return {id, nombre, precio}

  })

  // crear
  const db = getFirestore()
  const queryCollection = collection(db, "orders")
  addDoc(queryCollection, orden)
  .then(resp => navigate(`/checkout/${resp.id}`))
  .catch(err => console.log(err))
  .finally(()=> vaciarCarrito())

  //  update
  // const queryItem = doc(db, 'items', '3HQHVjWTVuN1uIVsW9HK')

  // updateDoc(queryItem, {
  //   stock: 20
  // })
  // .then(()=> console.log('tarea fin'))

}

  return (

    <div className='cartview-container'>
      {cart.map(item => (
        <div className='cartview-item' key={item.id}>

          <div className='cartview-iyt'>
            <img className='cartview-img' src={item.image} alt={item.title} />
          </div>
          <div className='cartview-description'>
            <h2 className='cartview-title'>{item.title}</h2>
            <div className='cartview-description-info'>
              <span className='cartview-price'>${item.price}</span>
              <span className='cartview-count'>Cantidad: {item.count}</span>
              <span className='cartview-button-delete' onClick={() => deleteItem(item.id)}><AiOutlineDelete /></span>
            </div>
          </div>
        </div>
      ))}
      <div className='cartview-total-container'>
        <button className='cartview-button-emptycard' onClick={vaciarCarrito}>Vaciar carrito</button>
        <button className='cartview-button-finish' onClick={generarOrden}>Finalizar Compra</button>
      </div>
        <h2 className='cartview-total'>Total: ${getItemPrice()}</h2>
    </div>
  )
}

export default Cart
