import React from 'react'
import '../orders/orders.css'

export default function ProductCard({title, price, image, options, onpress}) {
  return (
    <>
      <div className='contentCard'>
        <img src={image} alt='productImage'></img>
        <p className='productName'>{title}</p>
        <p className='price'>{price}</p>
        <button onClick={onpress}>+</button>
      </div>
    </>
  )
}
