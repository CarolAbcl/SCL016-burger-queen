import React from 'react'
import coffeMilk from './coffeMilk.jpg'
import '../orders/orders.css'

export default function ProductCard() {
  return (
    <>
      <div className='contentCard'>
        <img src={coffeMilk} alt='coffeMilk'></img>
        <p className='productName'>Café con leche</p>
        <p className='price'>$1.000</p>
        <button>+</button>
      </div>
    </>
  )
}
