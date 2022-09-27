import React from 'react'
import { useState } from 'react'

function ItemCount({initialCount, stockCount}) {


  const [ count, setCount]= useState(initialCount)

  const contador = () => {
    if (count < stockCount)
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
    <div>
        <button onClick={onAdd}className='btn btn-outline-secondary rounded-0 '>
           Agregar al Carrito
        </button>
      </div>
      <button onClick={contador} className='btn btn-outline-secondary rounded-0 '>+</button>
    <button onClick={sacar} className='btn btn-outline-secondary rounded-0 '>-</button>
    <p>{count}</p>
    </>
  )
}

export default ItemCount