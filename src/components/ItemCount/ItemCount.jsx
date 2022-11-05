import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function ItemCount({initialCount, stockCount, onAdd }) {


  const [ count, setCount]= useState(initialCount)

  const contador = () => {
    if (count < stockCount)
      setCount(count + 1)
    // Ojo, me permite agregar (stockCount-1)+(stockCount-1)+(stockCount-1) (...) al repetir la operación.
  }
  const sacar = () => {
   if (count > 1){
    setCount(count - 1)
   }
    // Ojo con los ternarios con condiciones, nunca anides condicionales en un ternario, como ternario con otras
    // condiciones (a menos a que sea para asignar implícitamente, pero algo simple), o ternarios con short circuits.
  }

  return (
    <>
    <div>
    <Link to={`/`} ><button className='btn btn-outline-info rounded-0 '>
        Seguir Comprando
        </button>
    </Link>
    <button onClick={()=> onAdd(count)} className='btn btn-outline-info rounded-0 '>
        Agregar
        </button>
      </div>
      <button onClick={contador} className='btn btn-outline-info rounded-0 '>+</button>
    <button onClick={sacar} className='btn btn-outline-info rounded-0 '>-</button>
    <p>{count}</p>
    </>
  )
}

export default ItemCount