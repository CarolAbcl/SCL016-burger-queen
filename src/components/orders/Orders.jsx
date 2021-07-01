import './orders.css'
import React, {useState} from 'react'
import Header from '../Header'
import ProductCard from './productCard'
import menuData from '../../data/data.js'
import ModalOptions from '../orders/modalOptions.jsx'

const Orders = () => {
let [menu, setMenu] = useState('Menú Desayuno');
let menuBreakfast = menuData.filter((items) => items.category === 'breakfast');
let menuLunch = menuData.filter((items) => items.category === 'lunch');
let [products, setProducts] = useState(menuBreakfast)
let [bill, setBill] = useState([]);
let [total, setTotal] = useState(0);
//let [itHasOptions, setItHasOptions] = useState(false)
let [productOption, setProductOption] = useState('')

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
    console.log(order[0].options)
    setProductOption(productOption = order[0].options)
    if (order[0].options.length !== 0){
      // setItHasOptions(itHasOptions = true)
      alert('tiene opciones' + order[0].options);
    }
    const orderItem = {
      id: order[0].id,
      name: order[0].name,
      price: order[0].price,
      options: '',
      amount: 1
    }
    let found = bill.find(el => el.id === orderItem.id)
    if (found !== undefined){
      console.log('encontrado')
      found.amount ++;
    } else {
      setBill(bill=[...bill, orderItem])
    }
     setTotal(total = total + order[0].price);
     console.log(bill);
  }

  const deleteItem =(id) =>{
    let deleteId = bill.find(el => el.id === id)
    deleteId.amount --;
    setTotal(total = total - deleteId.price);
    if (deleteId.amount === 0){
      let newBill = bill.filter( item => item.id !== id)
      setBill(bill = newBill);
    }
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
                    {item.amount}{item.name}{item.price}
                    <button onClick={() =>deleteItem(item.id)}>X</button>
                  </li>
                )
            }
            <h2>Total: {total}</h2>
          </ul>
            <ModalOptions 
            options ={productOption}
           />
        </div>
      </div>
    </>
  )
}
export default Orders;

