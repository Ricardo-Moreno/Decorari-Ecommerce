import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function ItemCount({initialCount, stockCount, onAdd }) {


  const [ count, setCount]= useState(initialCount)

  const contador = () => {
    if (count < stockCount)
      setCount(count + 1)
  }
  const sacar = () => {
   if (count ? count !== 1 : count !== 0 )
    {setCount(count - 1)}
  }

  console.log(count)

  return (
    <>
    <div>
    <Link to={`/`} ><button className='btn btn-outline-info rounded-0 '>
        Seguir Comprando
        </button>
    </Link>
    <button onClick={()=> onAdd(count)}className='btn btn-outline-info rounded-0 '>
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