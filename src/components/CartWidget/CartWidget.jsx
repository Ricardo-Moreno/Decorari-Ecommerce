import "./CartWidget.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function CartWidget() {
  const { getItemQty } = useContext(CartContext);

  return (
    <Link className="detail-cart" to={"/cart"}>
      <div className="cart-container">
        <AiOutlineShoppingCart className="cart-icono" />
        <div className={getItemQty() <= 0 ? "display-none" : "display"}>
          {getItemQty() > 0 && getItemQty()}
        </div>
      </div>
    </Link>
  );
}

export default CartWidget;
