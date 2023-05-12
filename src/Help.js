import React from 'react'
import './App.css'

const Help = () => {
  return (
    <>
        <div className='container-fluid justify-content-evenly'>
            <div className='row'>
                <div className='col-md-12' id="flex1">
                    <ul>
                        <li>HOME</li>
                        <li>PRODUCT</li>
                        <li>ABOUT</li>
                        <li>HELP</li>

                    </ul>
                    <ul>
                      <li id="main">HELP</li>
                      <li>PAYMENT</li>
                      <li>SHIPPING</li>
                      <li>FAQ</li>
                      <li>CANCELLATION/RETURN</li>
                    </ul>
                    <ul id="main1">
                      <li id="main">SOCIAL</li>
                      <li>INSTAGRAM</li>
                      <li>TWIITER</li>
                      <li>FACEBOOK</li>
                     
                    </ul>
                    <br></br>
                    
                    
                    
                </div>
                <div className='row'>
                  <div className='col-md-12 text-center'>
                    <p>website created my brijesh</p>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Help