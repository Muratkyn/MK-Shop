import React from 'react'
import { PRODUCTS } from '../../Products'
import Product from './Product'
import './Shop.css'
import {CaretLeft} from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Shop = () => {
  
  const [items, setItems] = useState(PRODUCTS);

  const filterHandle = (productType) => {
    const updatedItems = PRODUCTS.filter ((currentItem) => {
      return currentItem.category === productType
    })   
    setItems(updatedItems);
  }
  
  const homeNavigate = useNavigate()
  return (
    <div className='shop'>
      
      <div className="head_header">
          <div onClick={() => {homeNavigate('/')}} className='home_icon'>
          <CaretLeft size={32} />
          </div>
            <p onClick={() => {homeNavigate('/')}} className='home_link'>Home</p>
          <div className="head_title">
              <h1>ALL PRODUCTS</h1>
          </div>
      </div>
      <div>
      <div className="btn_list">
              <button
              className='btn_items' onClick={()=>setItems(PRODUCTS)}>All Products</button>
              <button className='btn_items'onClick={()=>filterHandle("Men")}>Men</button>
              <button className='btn_items'onClick={()=>filterHandle("Women")}>Women</button>
              <button className='btn_items'onClick={()=>filterHandle("Unisex")}>Unisex</button>
              <button className='btn_items'onClick={()=>filterHandle("Accessories")}>Accessories</button>
            </div>
      </div>
        
        <div className='products'>
          {items.map((product) =>
          <Product data={product}/>

          )}
        </div>
        
        <div className="client_testimonials">
          <div className="client_testimonials_header">
            <h1>WHAT OUR CLIENTS SAY?</h1>
            <p className='client_testimonials_header_paragraph'>Discover the positive impact we've made on the our clients by reading through 
              their testimonials!
              </p>
            <div className='client_testimonials_box'>
              <div className='client_testimonials_all'>
                <div className="client_testimonials_box_left">
                  <p className='client_testimonials_all_paragraph'>"Really needed a new axe. Can't stand with what my brother Loki is doing these days. I would recommend all to take a look at it"</p>
                    <div className='.client_testimonials_name'>
                      <div className='client_testimonials_profile'>
                        <img src="https://flash.comiccruncher.com/images/characters/4c410c56.jpg" alt="" />                  
                          <div className='client_testimonials_profile_info'>
                            <h4>Thor ThunderGod</h4>
                          </div>
                      </div>
                    </div>
                </div>
                <div className="client_testimonials_box_right">
                  <p className='client_testimonials_all_paragraph'>"I was badly in need of a new t-shirt, everytime I get angry, literally destroying my t-shirts. Thanks to MK it is no big deal. "</p>
                    <div className='.client_testimonials_name'>
                      <div className='client_testimonials_profile'>
                        <img src="https://i.ebayimg.com/images/g/AqAAAOSw2PFhdkaI/s-l500.jpg" alt="" />
                          <div className='client_testimonials_profile_info'>
                            <h4>Hulk the Bulk</h4>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )

}

export default Shop