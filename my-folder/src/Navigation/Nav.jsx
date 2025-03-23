import React from 'react'
import './Nav.css'
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShopping,AiOutlineUserAdd } from 'react-icons/ai';

const Nav = () => {
  return (
    <nav>
  <div className="nav-container">
    <input type="text"  
    placeholder='Enter the shoes ' 
    className='search-input'/>
  </div>
  <div className="profile-container">
    <a href="#">
      <FiHeart className='nav-icons' />
      
    </a>
    <a href="">
      <AiOutlineShopping  className='nav-icons'/>
    </a>
    <a href="">
      <AiOutlineUserAdd className='nav-icons'/>
    </a>
  </div>
 </nav>
  )
}

export default Nav

 