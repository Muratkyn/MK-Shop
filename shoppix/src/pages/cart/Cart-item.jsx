import React, { useContext }  from 'react'
import "./Cart.css";
import { ShopContext } from '../../context/Shop-context';
import './Cart-item.css';


const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data

    const { cartItems, addToCart, removeFromCart, updateCartItemAmount, removeProduct} = useContext(ShopContext);

  
  return (
    <div className='cartItem'>
        <img src={productImage}></img>
        <div className='description'>
            <div> 
            <button className='btn_cart-item-remove'onClick={() => removeProduct(id)}>X</button>
              <p><b>{productName}</b></p>
            </div> 

            <p>€{price}</p>
            <div className='countHandler'>
                <button className='btn_cart-item' onClick={() => removeFromCart(id)}>-</button>
                <input className='cart-input' value={cartItems[id]} onChange={(e) => updateCartItemAmount(Number(e.target.value), id)} />
                <button className='btn_cart-item' onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem