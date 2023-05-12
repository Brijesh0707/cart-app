import React from 'react'
import './App.css'
import { NavLink} from 'react-router-dom'
import Product1 from './images/product1.jpeg'
import Product2 from './images/product17.jpeg'

import Product3 from './images/product3.jpeg'
import Product4 from './images/product18.jpeg'

import Product5 from './images/product9.jpeg'
import Product6 from './images/product10.jpeg'

import Product7 from './images/product11.jpeg'
import Product8 from './images/product12.jpeg'

const Product = () => {
  return (
    <>
    <div>
     <div class="container-fluid justify-content-evenly" id="product1">
     <div className='row'>
        <div className='col-mb-12 text-center pt-3'>
            <h1 id="text1">PRODUCTS</h1>
            <br/>
        </div>
     </div>
          <div class="row row-cols-lg-4 row-cols-2 justify-content-center text-center" id="row1">

          
           
          
           <div class="col">
            <div class="card" >
            <img class="card-img-top" src={Product1} alt="Card image cap" id="img02" />
            <div class="card-body">
              <h5 class="card-title">BAGGY PANT <br/></h5>
            
            </div>
          </div>
        </div>
        <div class="col">
            <div class="card" >
            <img class="card-img-top" src={Product2} alt="Card image cap" id="img02" />
            <div class="card-body">
              <h5 class="card-title">MEN SHIRT'S<br/></h5>
            
            </div>
          </div>
        </div>
        <div class="col">
            <div class="card" >
            <img class="card-img-top" src={Product3} alt="Card image cap" id="img02" />
            <div class="card-body">
              <h5 class="card-title">JOCKER PANT<br/></h5>
          
            </div>
          </div>
        </div>
        <div class="col">
            <div class="card" >
            <img class="card-img-top" src={Product4} alt="Card image cap" id="img02" />
            <div class="card-body">
              <h5 class="card-title">HOODIE'S<br/></h5>
            
            </div>
          </div>
        </div>
          
         
          


      
       
        </div>
        <div class="row row-cols-lg-4 row-cols-2 justify-content-center text-center" id="row1">

          
           
          
<div class="col">
 <div class="card" >
 <img class="card-img-top" src={Product5} alt="Card image cap" id="img02" />
 <div class="card-body">
   <h5 class="card-title">PRINTED SHIRTS <br/></h5>
 
 </div>
</div>
</div>
<div class="col">
 <div class="card" >
 <img class="card-img-top" src={Product6} alt="Card image cap" id="img02" />
 <div class="card-body">
   <h5 class="card-title">MEN SHIRT'S<br/></h5>
 
 </div>
</div>
</div>
<div class="col">
 <div class="card" >
 <img class="card-img-top" src={Product7} alt="Card image cap" id="img02" />
 <div class="card-body">
   <h5 class="card-title">COLORFULL SHIRT<br/></h5>

 </div>
</div>
</div>
<div class="col">
 <div class="card" >
 <img class="card-img-top" src={Product8} alt="Card image cap" id="img02" />
 <div class="card-body">
   <h5 class="card-title">HOODIE'S<br/></h5>
 
 </div>
</div>
</div>







</div>
            
        <div className='row text-center'>
         <div className='col-mb-10'>
         <NavLink to="/product">
        <button type='button' id="btn5" className='text-center'>View All Product</button>
        </NavLink>
        </div>
        </div>
   

    </div>
    </div>
    </>
  )
}

export default Product