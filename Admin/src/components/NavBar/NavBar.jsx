import React from 'react'
import "./NavBar.css"
import { assets } from '../../assets/assets'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <img className='logo' src={assets.logo} alt="" />
      <h4>Admin Panel</h4>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default NavBar
