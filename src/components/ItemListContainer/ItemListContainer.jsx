//import { getFetch } from '../../MockApi/MockApi';
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RaceBy } from '@uiball/loaders'
import './ItemListContainer.css'
import { getFirestore, doc, getDoc, collection, getDocs, docs} from 'firebase/firestore'


function ItemListContainer() {

const [itemList, setitemList] = useState ([])
const [itemLis, setitemLis] = useState ({})
const { id } = useParams()
const [loading, setLoading] = useState(false)
 

//ItemDetailContainer
/*
useEffect(()=>{
    const db  = getFirestore()
    const dbQuery = doc(db, 'items', '3HQHVjWTVuN1uIVsW9HK')
    getDoc(dbQuery)
    .then(resp => setitemLis({id: resp.id, ...resp.data()}))
}, [])
*/
//ItemListContainer

useEffect(()=>{
    const db  = getFirestore()

    const queryCollection = collection(db, 'items')
    getDocs(queryCollection)
    .then(resp => setitemList(resp.docs.map(item => ({id: item.id, ...item.data()} ))))
    .catch((err)=> console.log(err))
    .finally (()=>setLoading(true))


},[])







/*useEffect( () => {
    if(id) {
    getFetch()
    .then(respuesta => setitemList(respuesta.filter((prods) => prods.category === id)))
    .catch((err)=> console.log(err))
    .finally (()=>setLoading(true))
    }else {
    getFetch()
    .then(respuesta => setitemList(respuesta))
    .catch((err)=> console.log(err))
    .finally (()=>setLoading(true))
    }
}, [id])*/

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