import './orders.css'
import React, {useState} from 'react'
import Header from '../Header'
import ProductCard from './productCard'

const Orders = () => {
let [menu, setMenu] = useState(' ');

  const breakfastMenu = ()=>{
     setMenu(menu ='Menú Desayuno')
  } 
  const lunchMenu = () =>{
     setMenu(menu = 'Menú Almuerzo y Cena')
  }
  return (
    <>
      <Header />
      <div className='orderColumn'>
        <div className='orderLeft'>        
          <button className="enterButton" onClick={breakfastMenu}>Desayuno</button>  
          <button className ="enterButton" onClick={lunchMenu}>Almuerzo y Cena</button> 
          <h2>{menu}</h2>
          <div className='wrapCards'> 
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
        <div className='orderRight'></div>
      </div>
    </>
  )
}
export default Orders;

