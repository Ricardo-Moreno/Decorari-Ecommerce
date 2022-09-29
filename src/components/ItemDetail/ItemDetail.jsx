
import Button from 'react-bootstrap/Button';
import { AiOutlineShoppingCart } from "react-icons/ai"
import './ItemDetail.css';


function ItemDetail({data}) {

    return (
        <div className='detail-container'>
            <div className='detail-img-container'>
                <h2 className='detail-title'>{data.title}</h2>
                <img className='detail-img' src={data.image} alt={data.title} />
            </div>
            <div className='detail-buy'>
                    <h2 className='detail-price'>$ {data.price}</h2>
                <Button variant='dark' className='detail-button'>
                    <AiOutlineShoppingCart className="cart-icon-button" />
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}

export default ItemDetail;

