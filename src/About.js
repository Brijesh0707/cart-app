import React from 'react'
import './App.css'
import About1 from './images/about.png'

const About = () => {
  return (
    <div>
    <div className='container-fluid justify-content-evenly'>
        <div className='row text-center pt-5'>
            <div className='col-mb-12'>
                <h1 id='text1'>ABOUT US</h1>
            </div>
        </div>
        <div className='row pt-5 justify-content-evenly' >
            <div className='col-md-5'>
                <img src={About1} id="img2"></img>
            </div>
            <div className='col-md-5' id="para">
                <h5>An ecommerce website is an online platform where businesses can sell their products and services directly to consumers. It usually includes a catalog of products, a shopping cart, a checkout process, and payment processing. Other features may include product reviews, wishlists, order tracking, and customer support. The design and functionality of an ecommerce website should be optimized for easy navigation, product discovery, and a seamless user experience. It should also be secure and reliable to build trust with customers and protect sensitive data.</h5>
            </div>
        </div>
    </div>

    </div>
  )
}

export default About