import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

function Cart() {
  const context = useContext(CartContext);
  const { cart, deleteItem, vaciarCarrito, getItemPrice } = context;

  if (cart.length === 0) {
    return (
      <div className="cartview-emptycard-text">
        <h1>
          Tu carrito esta vacio...
          <Link className="cartview-link-home" to={"/"}>
            Seguir comprando
          </Link>
        </h1>
      </div>
    );
  }

  return (
    <div className="cartview-container">
      {cart.map((item) => (
        <div className="cartview-item" key={item.id}>
          <div className="cartview-iyt">
            <img className="cartview-img" src={item.image} alt={item.title} />
          </div>
          <div className="cartview-description">
            <h2 className="cartview-title">{item.title}</h2>
            <div className="cartview-description-info">
              <span className="cartview-price">${item.price}</span>
              <span className="cartview-count">Cantidad: {item.count}</span>
              <span
                className="cartview-button-delete"
                onClick={() => deleteItem(item.id)}
              >
                <AiOutlineDelete />
              </span>
            </div>
          </div>
        </div>
      ))}
      <h2 className="cartview-total">Total: ${getItemPrice()}</h2>
      <div className="cartview-total-container">
        <CheckoutForm />
        <button className="cartview-button-emptycard" onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}

export default Cart;
