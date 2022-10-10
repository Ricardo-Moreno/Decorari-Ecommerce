
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { RaceBy } from '@uiball/loaders'


function ItemDetail({data}) {

const [ inputType, setInputType ] = useState('1')
const [loading, setLoading] = useState(true)

const {addItem} = useContext(CartContext)

const ButtonCount = ({handleInter}) => {
        return <button
        className='btn btn'
        onClick={handleInter}> Agragar Al carrito</button>
}

const handleInter = () => {
    setInputType('2')
}

const pasar = (count) => {
    addItem(data, count)
}

useEffect(()=> {
    setTimeout(()=>{
        setLoading(false);
    },1500)
},[]);




 return (
    <>
     { loading ? 
<RaceBy
size={1918}
lineWeight={5}
speed={1.4}
color="#CE863E"
/> :
        <div className='detail-container'>
            <div className='detail-img-container'>
                <h2 className='detail-title'>{data.title}</h2>
                <img className='detail-img' src={data.image} alt={data.title} />
            </div>
            <div className='detail-buy'>
                    <h2 className='detail-price'>$ {data.price}</h2>
                { inputType === '1' ?
                <Button variant='primary' >
                <ButtonCount handleInter={handleInter}/>
                </Button>:
                <ItemCount
                    initialCount={data.initial}
                    stockCount={data.stock}
                    detalleId={data.id}
                    onAdd={pasar}
                        />
                }
            </div>
        </div>
}
     </>
    )
}
export default ItemDetail;

