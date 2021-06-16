import './orders.css'
import React from 'react'
import Header from '../Header'
import EnterButton from '../EnterButton'

export default function Orders() {
  return (
    <>
      <Header />
      <div className='orderColumn'>
        <div>        
        <EnterButton title='Desayuno'/> 
        <EnterButton title='Almuerzo y Cena'/> 
        </div>
      </div>
    </>
  )
}
