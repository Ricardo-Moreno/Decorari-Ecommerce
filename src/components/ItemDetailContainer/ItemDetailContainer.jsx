//import ItemDetail from "../ItemDetail/ItemDetail"
import React, { useState, useEffect } from 'react';
import { getSingleProduct } from '../../MockApi/MockApi';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const { detalleId } = useParams()

    useEffect(() => {
        getSingleProduct(detalleId)
        .then(resp => setProduct(resp))
        .catch((err) => console.log(err))
     }, [detalleId])



  return (
    <>
    <div>
      <ItemDetail
      data={product}
      />
    </div>
    </>
  )
}

export default ItemDetailContainer