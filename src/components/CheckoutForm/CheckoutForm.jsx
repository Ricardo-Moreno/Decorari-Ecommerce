import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { createBuyOrder } from "../../firebase/config";
import FormInput from "../FormInput/FormInput";

function CheckoutForm() {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();
  const context = useContext(CartContext);
  const { cart, vaciarCarrito, getItemPrice } = context;

  function handleCheckout(event) {
    event.preventDefault();
    const orderData = {
      buyer: dataForm,
      items: cart,
      total: getItemPrice(),
    };
    createBuyOrder(orderData)
      .then((resp) => navigate(`/checkout/${resp}`))
      .catch((err) => console.log(err))
      .finally(() => vaciarCarrito());
  }

  function inputChangeHandler(event) {
    let inputName = event.target.name;
    let value = event.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = value;
    setDataForm(newDataForm);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleCheckout}>
        <FormInput
          value={dataForm.name}
          name="name"
          inputChangeHandler={inputChangeHandler}
        >
          Nombre
        </FormInput>
        <FormInput
          value={dataForm.phone}
          name="phone"
          inputChangeHandler={inputChangeHandler}
        >
          Telefono
        </FormInput>
        <FormInput
          value={dataForm.email}
          name="email"
          inputChangeHandler={inputChangeHandler}
        >
          Email
        </FormInput>
        <button className="cartview-button-finish" disabled={ !dataForm.name || !dataForm.phone || !dataForm.email} onClick={handleCheckout}>
          Finalizar Compra
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
