import { itemList } from '../../MockApi/MockApi';
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';




const getFetch = new Promise((resolve) => {
  setTimeout(()=>{
      resolve(itemList)
  }, 2000)
})

function ItemListContainer() {

const [itemList, setitemList] = useState ([])
const { id } = useParams() 



useEffect(()=>{
    getFetch
    .then(respuesta => setitemList(respuesta))
    .catch((err)=> console.log(err))

})

console.log(id)

    return (
        <div className="container">
            <ItemList data={itemList} />
        </div>
    );
}

export default ItemListContainer;