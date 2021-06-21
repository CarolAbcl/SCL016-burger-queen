import './orders.css'
import React, {useState} from 'react'
import Header from '../Header'
import ProductCard from './productCard'
import menuBreakfast from '../../data/data.js'

const Orders = () => {
let [menu, setMenu] = useState('Menú Desayuno');

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
            {menuBreakfast.items.map(products => (
            <ProductCard key={products.id} title={products.name} price={products.price} image={products.image}/>
            ))} 
          </div>
        </div>
        <div className='orderRight'></div>
      </div>
    </>
  )
}
export default Orders;

