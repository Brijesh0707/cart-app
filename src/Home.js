import React from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from './Navbar';
import './App.css';
import Silder1 from './images/slider1.jpg';
import Silder2 from './images/slider2.jpg';
import Silder3 from './images/slider3.jpg';
import Silder4 from './images/slider4.jpg';
import Product from './Product';
import About from './About';
import Help from './Help';

const Home = () => {
  return (
    <>
      <div id="top">
        <Navbar />
      </div>
      <div className='slider'>
        <Carousel
        style={{ height: "30%" }}
          pause={false} // disables auto-pause on mouse hover
          interval={3000} // sets the time between slides to 3 seconds
          nextLabel={null} // hides the "Next" button label
          prevLabel={null} // hides the "Previous" button label
          nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />} // sets the "Next" button icon
          prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />} // sets the "Previous" button icon
        >
          <Carousel.Item>
            <img src={Silder1} className="d-block w-100" id='img' alt="..." />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Silder2} className="d-block w-100" id='img' alt="..." />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Silder3} className="d-block w-100" id='img' alt="..." />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Silder4} className="d-block w-100" id='img' alt="..." />
          </Carousel.Item>
          
        </Carousel>
        <style jsx>{`
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      background-color: red;
      
    }
  `}</style>
      </div>
      <Product></Product>
      <About></About>
      <Help></Help>
    </>
  );
};

export default Home;
