import Item from "../Item/Item";
import "./ItemList.scss";

function ItemList({ data }) {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        {data.map((itemList) => (
          <div className="col-md-3 p-3" key={itemList.id}>
            <Item
              title={itemList.title}
              imageSource={itemList.image}
              text={itemList.text}
              initial={itemList.initial}
              stock={itemList.stock}
              id={itemList.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
