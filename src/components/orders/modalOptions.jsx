import React from 'react'
import './orders.css'

export default function ModalOptions({options}) {
  const handleSubmit =() =>{
    alert('enviado')
  }
  return (
    <div className='showOptions'>
      <p>Jugo de Frutas Natural
      <button>X</button>
      </p>
      <form onSubmit={handleSubmit}>
        <h2>Opciones</h2>
        {/* <input type='checkbox'>opcion 1</input> */}
        {/* {options.forEach(option => {
        <input type='checkbox'>{option}</input>  
        })}  */}
        <button type='submit'>Confirmar</button>
      </form>
    </div>
  )
}
