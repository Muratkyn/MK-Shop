import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react';
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate()
  const handleSubmit= (e) => {
    e.preventDefault();
  };

  return (
    <div className='navbar'>
      <Link to={'/'}>
      <h3 className='brand' onClick={()=> navigate("/")}>
        MK Outfit
      </h3></Link>
      
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/shop'>Store</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/cart'>
                <ShoppingCart size={30} />
            </Link>
            
            
        </div>
    </div>
  )
}

export default Navbar
