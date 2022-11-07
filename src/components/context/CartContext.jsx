import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isIntCart = (id) => {
    let found = cart.some((item) => item.id === id);
    return found;
  };
  const addItem = (item, count) => {
    const newItem = {
      ...item,
      count,
    };

    if (isIntCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[productIndex].count += count;
      setCart(auxArray);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const vaciarCarrito = () => {
    return setCart([]);
  };

  const deleteItem = (id) => {
    return setCart(cart.filter((x) => x.id !== id));
  };

  const getItemQty = () => {
    return cart.reduce((acc, x) => (acc += x.count), 0);
  };
  //
  const getItemPrice = () => {
    return cart.reduce((acc, x) => (acc += x.price * x.count), 0);
  };

  return (
    <Provider
      value={{
        cart,
        isIntCart,
        addItem,
        vaciarCarrito,
        deleteItem,
        getItemQty,
        getItemPrice,
      }}
    >
      {children}
    </Provider>
  );
};

export default MyProvider;
