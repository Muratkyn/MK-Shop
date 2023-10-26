import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
    
     
     <div className='container'>
        <div id='content1' className="content">
          <div className='image-field'>
            <img className='img-about' src="https://www.monitask.com/wp-content/uploads/2021/08/teamwork-2.jpg" alt="teamwork" />
          </div>
          <div className='text-field'>
            <h1>Expert Team</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
          </div>
        </div>
        <div id='content2'  className="content">
          <div className='text-field'>
          <h1>Fast Delivery</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
          </div>
          <div className='image-field'>
          <img className='img-about' src="https://www.westend61.de/images/0001717587pw/mature-warehouse-manager-pointing-at-a-package-box-while-talking-to-his-female-colleague-two-logistics-workers-doing-stock-control-in-a-distribution-warehouse-JLPPF01319.jpg" alt="teamwork" />
           
          </div>
        </div>
        <div id='content3' className="content">
          <div className='image-field'>
            <img className='img-about' src="https://www.monitask.com/wp-content/uploads/2021/08/teamwork-2.jpg" alt="teamwork" />
          </div>
          <div className='text-field'>
            <h1>Expert Team</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
          </div>
        </div>
     </div>
      </div>
  )
}

export default About