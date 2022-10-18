import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc} from 'firebase/firestore'
import { RaceBy } from '@uiball/loaders';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [itemLis, setitemLis] = useState ({})
  const [loading, setLoading] = useState(false)
  const {detalleId} = useParams()

    useEffect(()=>{
      const db  = getFirestore()
      const dbQuery = doc(db, 'items', detalleId)
      getDoc(dbQuery)
      .then(resp => setitemLis({id: resp.id, ...resp.data()}))
      .catch((err)=> console.log(err))
      .finally (()=>setLoading(true))
  }, [detalleId])


  console.log(detalleId)

  return (
    <>
    { !loading ?
<RaceBy
size={1918}
lineWeight={5}
speed={1.4}
color="#CE863E"
/> :
    <div>
      <ItemDetail
      data={itemLis}
      />
    </div>
}
    </>
  )
}

export default ItemDetailContainer