import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react';
import { RaceBy } from '@uiball/loaders'
import './ItemListContainer.css'
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import { useParams } from 'react-router-dom';


function ItemListContainer() {

const [itemList, setitemList] = useState ([])
const [loading, setLoading] = useState(false)
const {id} = useParams()

useEffect(()=>{
    const db  = getFirestore()

    if (id){
    const queryCollection = collection(db, 'items')
    const queryCollectionFilter = query(queryCollection, where('category', '==', id))
    getDocs(queryCollectionFilter)
    .then(resp => setitemList(resp.docs.map(item => ({id: item.id, ...item.data()} ))))
    .catch((err)=> console.log(err))
    .finally (()=>setLoading(true))
} else {
    const queryCollection = collection(db, 'items')
    getDocs(queryCollection)
    .then(resp => setitemList(resp.docs.map(item => ({id: item.id, ...item.data()} ))))
    .catch((err)=> console.log(err))
    .finally (()=>setLoading(true))
}},[id])

console.log(id)

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