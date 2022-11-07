import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ data }) {
  const [inputType, setInputType] = useState("1");

  const { addItem } = useContext(CartContext);

  const ButtonCount = ({ handleInter }) => {
    return (
      <button className="btn btn" onClick={handleInter}>
        Agregar Al carrito
      </button>
    );
  };

  const handleInter = () => {
    setInputType("2");
  };

  const pasar = (count) => {
    addItem(data, count);
  };

  return (
    <>
      <div className="detail-container">
        <div className="detail-img-container">
          <h2 className="detail-title">{data.title}</h2>
          <img className="detail-img" src={data.image} alt={data.title} />
        </div>
        <div className="detail-buy">
          <h2 className="detail-price">$ {data.price}</h2>
          {inputType === "1" ? (
            <ButtonCount variant="primary" handleInter={handleInter} />
          ) : (
            <ItemCount
              initialCount={data.initial}
              stockCount={data.stock}
              detalleId={data.id}
              onAdd={pasar}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default ItemDetail;
