import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react';
import { RaceBy } from '@uiball/loaders'
import './ItemListContainer.css'
import { getFirestore, collection, getDocs} from 'firebase/firestore'


function ItemListContainer() {

const [itemList, setitemList] = useState ([])
const [loading, setLoading] = useState(false)


useEffect(()=>{
    const db  = getFirestore()

    const queryCollection = collection(db, 'items')
    getDocs(queryCollection)
    .then(resp => setitemList(resp.docs.map(item => ({id: item.id, ...item.data()} ))))
    .catch((err)=> console.log(err))
    .finally (()=>setLoading(true))


},[])


console.log(itemList)

    return (


        <>
        { !loading ?
<RaceBy
size={1918}
lineWeight={5}
speed={1.4}
color="#CE863E"
/> :
        <div className="container">
            <ItemList data={itemList} />
        </div>
}
        </>
    )
}

export default ItemListContainer;