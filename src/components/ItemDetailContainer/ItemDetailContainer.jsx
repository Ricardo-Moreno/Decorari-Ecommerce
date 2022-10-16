import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc} from 'firebase/firestore'

function ItemDetailContainer() {
  const [itemLis, setitemLis] = useState ({})


    useEffect(()=>{
      const db  = getFirestore()
      const dbQuery = doc(db, 'items', '3HQHVjWTVuN1uIVsW9HK')
      getDoc(dbQuery)
      .then(resp => setitemLis({id: resp.id, ...resp.data()}))
  }, [])


  return (
    <>
    <div>
      <ItemDetail
      data={itemLis}
      />
    </div>
    </>
  )
}

export default ItemDetailContainer