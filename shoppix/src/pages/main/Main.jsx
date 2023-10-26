import React from 'react'
import './Main.css'
import { useNavigate } from 'react-router-dom'


const Main = () => {

  const navigateCart = useNavigate();
  return (
    <div>
      <div className='section_holder'>
          <div className='section_title'>
            <h1 className='header'>Welcome to MK Outfit!</h1>
            <p className='sub_header'>Where the quality unifies...</p>
            <button onClick={() => {navigateCart("/shop")}} className='btn_cart'>Shop now!</button>
          </div>
        <div className="section_image">
          <img className='image'></img>
        </div>
    </div>
    <div className="container-header">
      <div><h1>WHY TO CHOOSE US?</h1></div>
      <div><p>Start browsing and chek out our new trending products that will harmonize your style!</p></div>
    </div>
    <div className='plan-container_boxes'>
          <div className="plan-container__boxes__box">
            <img className='image-box1' src='https://pic.onlinewebfonts.com/thumbnails/icons_323456.svg'></img>
            <h1>High Quality</h1>
            <p>We offer the best quality approved products .</p>
          </div>
          <div className="plan-container__boxes__box">
            <img className='image-box2' src='https://pic.onlinewebfonts.com/thumbnails/icons_571295.svg'></img>
            <h1>Fast Delivery</h1>
            <p>Providing the fastest delivery within 24 hours.</p>
          </div><div className="plan-container__boxes__box">
            <img className='image-box3' src='https://pic.onlinewebfonts.com/thumbnails/icons_518256.svg'></img>
            <h1>7/24 SERVICE</h1>
            <p>We will be assisting you all the time.</p>
          </div>
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
                  <p className='client_testimonials_all_paragraph'>"I have made an acquisiton of new costume through MK Shop and it was a great experience, fast delivery always present for assistance"</p>
                    <div className='.client_testimonials_name'>
                      <div className='client_testimonials_profile'>
                        <img src="https://cdn.openart.ai/stable_diffusion/a43aaf980b46627f2409476afdcccb13f73deb30_2000x2000.webp" alt="" />                  
                          <div className='client_testimonials_profile_info'>
                            <h4>Spider-Man</h4>
                          </div>
                      </div>
                    </div>
                </div>
                <div className="client_testimonials_box_right">
                  <p className='client_testimonials_all_paragraph'>"It was a great experience! All of the products I need to challenge Spidey are just one click away! Excellent experience. "</p>
                    <div className='.client_testimonials_name'>
                      <div className='client_testimonials_profile'>
                        <img src="https://avatarfiles.alphacoders.com/151/151717.jpg" alt="" />
                          <div className='client_testimonials_profile_info'>
                            <h4>Venom</h4>
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

export default Main