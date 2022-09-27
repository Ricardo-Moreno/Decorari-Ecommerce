import { useState, useEffect } from "react"
import React  from 'react'
import { getSingleItem } from "../../MockApi/MockApi"


function ItemDetailContainer() {
const [item, setitem] = useState ({});

    useEffect(()=>{
        getSingleItem(0)
        .then(respuesta => setitem(respuesta))
        }, []);


    return (
        <div className="container">
            <h1>{item.title}</h1>
        </div>
    );
}

export default ItemDetailContainer;