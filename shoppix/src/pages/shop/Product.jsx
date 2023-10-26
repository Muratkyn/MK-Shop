import React, { useContext } from 'react'
import { ShopContext, } from '../../context/Shop-context'

const Product = (props) => {
    const {id, productName, price, productImage, stars} = props.data

    const {addToCart, cartItems} = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
    
    
  return (
    <div className='product'>
      <div className="btn_list">
            </div>
        <img src={productImage} />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p className='product_price'>€{price}</p>
            <span>{stars}</span>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}> <b>Add to Cart</b>
        {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
    </div>
  )
}

export default Product

// ANOTHER WAY COULD BE AS BELOW 
// const Product = (props) => {
//   
//   return (
//     <div>{props.data.id}</div>
//   )
// }