import { itemList } from '../../MockApi/MockApi';
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react';




const getFetch = new Promise((resolve) => {
  setTimeout(()=>{
      resolve(itemList)
  }, 2000)
})

function ItemListContainer() {

  const [itemList, setitemList] = useState ([])

useEffect(()=>{
    getFetch
    .then(respuesta => setitemList(respuesta))
    .catch((err)=> console.log(err))

})


    return (
        <div className="container">
            <ItemList data={itemList} />
        </div>
    );
}

export default ItemListContainer;