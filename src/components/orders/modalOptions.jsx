import React from 'react'
import './orders.css'

export default function ModalOptions({options}) {
  const handleSubmit =() =>{
    alert('enviado')
  }
  return (
    <div className='showOptions'>
      <div className='modalHeader'>
        <div>Jugo de Frutas Natural</div>
        <button>X</button>
      </div>
      <form  onSubmit={handleSubmit}>
        <div className='modalForm'>
        <h2>Opciones</h2>
        <input type='radio' value='piña'/> Piña
        {/* <input type='checkbox'>opcion 1</input> */}
        {/* {options.forEach(option => {
        <input type='checkbox'>{option}</input>  
        })}  */}
        </div>
        <button type='submit'>Confirmar</button>
      </form>
    </div>
  )
}
