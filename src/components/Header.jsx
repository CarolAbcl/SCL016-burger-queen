import  '../App.css'
import React from 'react'
import logo from '../images/logo.png'

export default function Header() {
  return (
    <div className='header'>
      <img src={logo} alt ="logo" width="293px"></img>
    </div>
  )
}
