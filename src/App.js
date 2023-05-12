import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import {Routes,Route} from "react-router-dom";
import Product1 from './Product1';
import About1 from './About1';
import Help1 from './Help1'


const App = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product1/>}/>
        <Route path='/about' element={<About1/>}/>
        <Route path='/help' element={<Help1/>}/>

        
      </Routes>


    </>
  )
}

export default App