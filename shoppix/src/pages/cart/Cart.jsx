import React from 'react'
import { ShopContext, } from '../../context/Shop-context'
import CartItem from './Cart-item'
import { PRODUCTS } from '../../Products'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import TrendingProducts from './TrendingProducts'



const Cart = () => {
  const { cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()

  return (
    <div>
      <div className='cart'>
        <h1>Your Cart Items</h1>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ?
      
      <div >
        <div>
        <p className='subtotal'>Subtotal: € {totalAmount}</p>
        </div>
        <div className="checkout">
        <button className='checkout_continue'>Checkout</button>
        </div>
          

      </div>
      : <div>
          <img src='https://minimalist-e-commerce.vercel.app/static/media/empty-cart.17f48bd13327a233e04a.png' style={{ width:'240px', height:'240px' }}></img>
          <h2 className='empty-card-header'>Your cart is Empty!</h2>
          <button className='button-browsing' onClick={() => navigate("/shop") }>Keep Browsing</button>
        </div>}
      <h1 className='trending_title'>TRENDING NOW</h1>
      </div>
      {PRODUCTS.map((product)=> {
            if (product.isTrending == true)
            return <TrendingProducts data={product}/>;
          })
          }
      
    </div>
  )
}

export default Cart