/*import { useState, useEffect } from "react"
import React  from 'react'
import { getSingleItem } from "../../MockApi/MockApi"
import ItemDetail from "../ItemDetail/ItemDetail";


function ItemDetailContainer() {
const [item, setitem] = useState ({});

    useEffect(()=>{
        getSingleItem(1)
        .then(respuesta => setitem(respuesta))
        }, []);

//console.log({item})

    return (
        <div className="container">
            <h1> <ItemDetail
        idDetail={item.id}
        titleDetail={item.title}
        imageDetail={item.img}
        stockDetail={item.stock}
        initialDetail={item.initial}
            />
            </h1>
        </div>
    );
}


export default ItemDetailContainer;*/

import ItemDetail from "../ItemDetail/ItemDetail"


function ItemDetailContainer() {

  return (
      <ItemDetail/>
  )
}

export default ItemDetailContainer