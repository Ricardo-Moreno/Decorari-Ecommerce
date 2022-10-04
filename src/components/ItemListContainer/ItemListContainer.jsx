import { getFetch } from '../../MockApi/MockApi';
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';




function ItemListContainer() {

const [itemList, setitemList] = useState ([])
const { id } = useParams()



useEffect( () => {
    if(id) {
    getFetch()
    .then(respuesta => setitemList(respuesta.filter((prods) => prods.category === id)))
    .catch((err)=> console.log(err))
    }else {
    getFetch()
    .then(respuesta => setitemList(respuesta))
    .catch((err)=> console.log(err))
    }
}, [id])



    return (
        <div className="container">
            <ItemList data={itemList} />
        </div>
    );
}

export default ItemListContainer;