import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { RaceBy } from "@uiball/loaders";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getItems, getItemsBycategory } from "../../firebase/config";

function ItemListContainer() {
  const [itemList, setitemList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getItemsBycategory(id)
        .then((resp) => setitemList(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(true));
    } else {
      getItems()
        .then((resp) => setitemList(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(true));
    }
  }, [id]);

  return (
    <>
      {!loading ? (
        <RaceBy size={1918} lineWeight={5} speed={1.4} color="#CE863E" />
      ) : (
        <div className="container">
          <ItemList data={itemList} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
