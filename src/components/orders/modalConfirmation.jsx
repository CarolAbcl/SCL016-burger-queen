import React from 'react'

export default function ModalConfirmation({children, isOpen, isClose, save}) {
  return (
    <div className={`openModal ${isOpen && 'is-open'}`}>
    <div className='showOptions'>
      <div className='modalHeader'>
        <div>{children[0]}</div>
        <button onClick={isClose}>X</button>
      </div>
      <div className='modalForm'>
        {children[1]}
      </div>
      <button className='enterButton' onClick={isClose}>Cancelar</button>
      <button className='enterButton active' onClick={save}>Confirmar</button>
    </div>
    </div>
  )
}
