import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Data from './list.json'

const Product1 = () => {
  return (
    <>
    <div id="top">
    <Navbar></Navbar>
    </div>
    <div className='container'>
    <div className='row'>
        <div className='col-md-12 text-center pt-5 pb-5'>
            <h1>ALL PRODUCTS </h1>
        </div>
    </div>
   
    <div class="row row-cols-lg-6 row-cols-2 justify-content-center text-center" id="row1">

          
           
          
     {
        Data.map(data => {
            return(
                <div class="col">
        <div class="card" >
        <img class="card-img-top" src={data.image} alt="Card image cap" id="img02" />
        <div class="card-body">
        <h5 class="card-title" id="title1">{data.title}<br/></h5>
        <h5 class="card-title" id="size">SIZE-{data.size}<br/></h5>
        <br></br>
        <h5 class="card-title" id="des">DESCRIPTION - {data.description}<br/></h5>
        <br/>
        <button type='button' id="red1">ADD TO CART</button>
        <h5 class="card-title" id="des">backend is coming soon <br/></h5>
 
    </div>
    </div>
    </div>




            )
        })
     }
    </div>
    </div>
    

    </>
  )
}

export default Product1