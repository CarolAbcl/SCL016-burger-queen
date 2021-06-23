import './orders.css'
import React, {useState} from 'react'
import Header from '../Header'
import ProductCard from './productCard'
import menuData from '../../data/data.js'
import Billing from './billing'

const Orders = () => {
let [menu, setMenu] = useState('Menú Desayuno');
let menuBreakfast = menuData.filter((items) => items.category === 'breakfast');
let menuLunch = menuData.filter((items) => items.category === 'lunch');
let [products, setProducts] = useState(menuBreakfast)
let [bill, setBill] = useState([]);
let [total, setTotal] = useState(0);

  const breakfastMenu = ()=>{
    setMenu(menu ='Menú Desayuno')
    setProducts(products = menuBreakfast)
  } 

  const lunchMenu = () =>{
    setMenu(menu = 'Menú Almuerzo y Cena')
    setProducts(products = menuLunch)
  }

  const addButton =(id) =>{
    let order = products.filter( (item) => item.id === id )
    setBill([...bill, order[0].name, order[0].price])
    setTotal(total = total + order[0].price);
    console.log(order)
  }

  return (
    <>
      <Header />
      <div className='orderColumn'>
        <div className='orderLeft'>        
          <button className='enterButton'  onClick={breakfastMenu}>Desayuno</button>  
          <button className ='enterButton' onClick={lunchMenu}>Almuerzo y Cena</button> 
          <h2>{menu}</h2>
          <div className='wrapCards'> 
            {products.map(product => (
            <ProductCard 
              key={product.id} 
              title={product.name} 
              price={product.price} 
              image={product.image} 
              options={product.options} 
              onpress={() => {addButton(product.id)}}/>
            ))} 
          </div>
        </div>
        <div className='orderRight'>
            <p>{bill}</p>
            <p>{total}</p>
            <Billing />
        </div>
      </div>
    </>
  )
}
export default Orders;

