import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react';
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context/Shop-context';





const Navbar = (props) => {


  const { cartItems} = useContext(ShopContext)
  const {id} = props.data

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
                <ShoppingCart size={30}/> 
                <span className='badge'>
                {cartItems[id]}
                </span>
            </Link>
            
            
        </div>
    </div>
  )
}

export default Navbar
