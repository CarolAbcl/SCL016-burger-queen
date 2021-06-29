import './orders.css'
import React, {useState} from 'react'
import Header from '../Header'
import ProductCard from './productCard'
import menuData from '../../data/data.js'

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
    let order = products.filter( item => item.id === id); 
     order[0].amount=1;
     console.log(order); 
     setBill(bill=[...bill, order])
     setTotal(total = total + order[0].price);
     console.log(bill);
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
          <p className='featuredP'>Pedido N°:</p>
          <label>Mesa:</label>
          <select name='mesa' defaultValue='0'>
            <option value='0'>Elige Mesa</option>
            <option value='1'>Mesa 1</option>
            <option value='2'>Mesa 2</option>
            <option value='3'>Mesa 3</option>
            <option value='4'>Mesa 4</option>
            <option value='5'>Mesa 5</option>
          </select>
          <br></br>
          <label>Nombre de Cliente</label>
          <input type='text' placeholder='Ingrese nombre'></input>
          <h3>Detalle</h3>
          <ul>
            {
                bill.map((item, index) =>
                  <li key={index+20} className='orderRow'>
                    {item[0].amount}{item[0].name}{item[0].price}
                    <button>X</button>
                  </li>
                )
            }
            <h2>Total: {total}</h2>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Orders;

