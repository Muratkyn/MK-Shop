import React from 'react'
import { PRODUCTS } from '../../Products'
import { ShopContext } from '../../context/Shop-context';
import { useContext }  from 'react'
import './TrendingProducts.css'


const TrendingProducts = (props) => {
    const {id, productName, price, productImage,stars} = props.data

    const { cartItems, addToCart} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]

  return (
    
    <div className='products_trending'>
       <div className='product_trending'>
        <div className="product_trending_list">
        
        <img src={productImage} />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>€{price}</p>
            <p>{stars}</p>
            <button className='addToCartBttn' onClick={() => addToCart(id)}> <b>Add to Cart</b>
        {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
        </div>
        </div>
        
        </div>
    </div>

  )
}

export default TrendingProducts