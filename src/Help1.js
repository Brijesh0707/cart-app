import React from 'react'
import Navbar from './Navbar'

const Help1 = () => {
  return (
    <>
        <div id="top">
            <Navbar></Navbar>
        </div>
        <div className='container-fluid mt-5 justify-content-evenly'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h1 id="text1">HELP</h1>
                </div>
            </div>
            <div className='row pt-5 pb-5 justify-content-evenly' id="back">
                <div className='col-md-5'>
                <div className="mb-3">
                     <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">FULL NAME</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Issue / Query</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
            
                    <input type="submit" className="form-control" id="exampleFormControlInput1" />
                </div>


                </div>
                <div className='col-md-5 text-center pt-5'>
                <p>Our help section page is an important resource for your website or platform, as it provides users with the information they need to use your product or service effectively. When designing your help section, it's important to keep the user in mind and create a clear, intuitive layout that makes it easy for them to find the information they need.</p>

                </div>
            </div>
        </div>
    </>
  )
}

export default Help1