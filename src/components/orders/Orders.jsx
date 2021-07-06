import './orders.css'
import React, {useState} from 'react'
import Header from '../Header'
import ProductCard from './productCard'
import menuData from '../../data/data.js'
import ModalOptions from '../orders/modalOptions.jsx'
import { store } from '../../firebaseconf'
import ModalConfirmation from './modalConfirmation.jsx'

const Orders = () => {
let [menu, setMenu] = useState('Menú Desayuno');
let menuBreakfast = menuData.filter((items) => items.category === 'breakfast');
let menuLunch = menuData.filter((items) => items.category === 'lunch');
let [products, setProducts] = useState(menuBreakfast)
let [bill, setBill] = useState([]);
let [total, setTotal] = useState(0);
//let [itHasOptions, setItHasOptions] = useState(false)
let [productOption, setProductOption] = useState('');
let [clientName, setClientName] = useState('');
let [table, setTable] = useState('');

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

  const saveOrder = (e) =>{
    e.preventDefault();
    if (clientName !== '' && table !== '0' && total !== 0 ){
      const dateOrder = new Date();
      const newOrder = {
      table: table,
      client: clientName,
      order: bill,
      total: total,
      status: 'Pending',
      date: dateOrder.toLocaleString()
      }
      store.collection('orders').add(newOrder)
      .then(() =>{
      console.log('orden añadida correctamente');
      setClientName('');
      setTable(0)
      setBill([]);
      setTotal(0);
      setIsOpen(false);
    })
      .catch((error) =>{
      console.log('Error al añadir' + error)
      })
    } else {
      alert('Faltan datos del pedido')
    }
  }
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () =>{setIsOpen(true)}; 
  const closeModal = () =>{setIsOpen(false)};

  return (
    <>
      <ModalConfirmation 
           isOpen={isOpen}
           isClose={() => {closeModal()}}
           save={saveOrder}
           >
             <p>Envio de Orden</p>
             <h2>El pedido será enviado a Cocina</h2>
        </ModalConfirmation>
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
          <select name='mesa' defaultValue={table} onChange={(e) => setTable(e.target.value)}>
            <option value='0'>Elige Mesa</option>
            <option value='Mesa 1'>Mesa 1</option>
            <option value='Mesa 2'>Mesa 2</option>
            <option value='Mesa 3'>Mesa 3</option>
            <option value='Mesa 4'>Mesa 4</option>
            <option value='Mesa 5'>Mesa 5</option>
          </select>
          <br></br>
          <label>Nombre de Cliente</label>
          <input value={clientName} type='text' placeholder='Ingrese un nombre' onChange={(e) => setClientName(e.target.value)}></input>
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
            <button className='enterButton' onClick={openModal}>Enviar a Cocina</button>
          </ul>
            {/* <ModalOptions 
            options ={productOption}
           /> */}
       
        </div>
        
      </div>
    </>
  )
}
export default Orders;

