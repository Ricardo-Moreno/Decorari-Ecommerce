import { getFetch } from '../../MockApi/MockApi';
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RaceBy } from '@uiball/loaders'
import './ItemListContainer.css'



function ItemListContainer() {

const [itemList, setitemList] = useState ([])
const { id } = useParams()
const [loading, setLoading] = useState(false)


useEffect( () => {
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
}, [id])



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
    );
}

export default ItemListContainer;