import  '../App.css'
import React from 'react'

export default function EnterButton(props) {
  const {title} = props;
  return (
    <>
      <button className="enterButton">{title}</button>
    </>
  )
}
