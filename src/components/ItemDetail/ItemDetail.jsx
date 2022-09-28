import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { AiOutlineShoppingCart } from "react-icons/ai"

import './ItemDetail.css';
import { getSingleProduct } from '../../MockApi/MockApi';


function ItemDetail() {

    const [product, setProduct] = useState({})
  
    useEffect(() => {
        getSingleProduct(1).then(resp => setProduct(resp));
    }, [])

    console.log(product)
    return (
        <div className='detail-container'>
            <div className='detail-img-container'>
                <h2 className='detail-title'>{product.title}</h2>
                <img className='detail-img' src={product.image} alt={product.title} />
            </div>
            <div className='detail-buy'>
                    <h2 className='detail-price'>$ {product.price}</h2>
                <Button variant='dark' className='detail-button'>
                    <AiOutlineShoppingCart className="cart-icon-button" />
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}

export default ItemDetail;

