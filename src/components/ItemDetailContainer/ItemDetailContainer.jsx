import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { RaceBy } from '@uiball/loaders';
import { useParams } from 'react-router-dom';
import {getSingleItem} from '../../firebase/config'

function ItemDetailContainer() {
  const [itemLis, setitemLis] = useState ({})
  const [loading, setLoading] = useState(false)
  const {detalleId} = useParams()

    useEffect(()=>{
      getSingleItem(detalleId)
      .then((resp) => setitemLis(resp))
      .catch((err)=> console.log(err))
      .finally (()=>setLoading(true))
  }, [detalleId])


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