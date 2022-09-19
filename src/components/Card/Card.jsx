import React, { useState } from 'react'
import './Card.scss';
import PropTypes from 'prop-types'



function Card({title, imageSource, text, initial, stock}) {

  const [ count, setCount]= useState(initial)

const contador = () => {
  if (count < stock)
    setCount(count + 1)
}
const sacar = () => {
 if (count ? count !== 1 : count !== 0 )
  {setCount(count - 1)}
}


const onAdd =() => {
  if(count === 1){
    alert(`Agregando al carrito ${count} Unidad`)
  }  else if (count > 1){
    alert(`Agregando al carrito ${count} Unidades`)
  } else {
    alert (`no hay unidades para agregar al carrito`)
  }

}







console.log(contador)
return (
    <>
    <div className='card text-center bg-succes'>
      <div className='overflow'>
        <img className='img card-img-top' src={imageSource} alt="" />
      </div>
    <div className='card-body text-secondari'>
    <h4 className='card-title text-secondary'>{title}</h4>
    <p className='card-text text-secondary'>
      {
        text ? text : 'Lorem ipsum dolor si'
      }
      </p>
      <div>
        <button onClick={onAdd}className='btn btn-outline-secondary rounded-0 '>
           Agregar al Carrito
        </button>
      </div>
      <button onClick={contador} className='btn btn-outline-secondary rounded-0 '>+</button>
    <button onClick={sacar} className='btn btn-outline-secondary rounded-0 '>-</button>
    <p>{count}</p>
    </div>
    </div>
    </>
  )
}

Card.propTypes ={
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default Card