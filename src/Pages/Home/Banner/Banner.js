import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../Banner/Banner/banner1.jpg'
import banner2 from '../Banner/Banner/banner2.jpg';
import banner3 from '../Banner/Banner/banner3.jpg';
const Banner = () => {
    
    return (
        <div>
        <Carousel variant="dark">
  <Carousel.Item>
   <img
     className="d-block w-100"
    
     src={banner1}
     alt="First slide"
   />
   <Carousel.Caption className="text-light w-50 mx-auto bg rounded">
   <h2>TOURS SEARCH PAGE</h2>
     
   </Carousel.Caption>
   </Carousel.Item>
               
  <Carousel.Item>
   <img
     className="d-block w-100"
    
     src={banner2}
     alt="Second slide"
   />
   <Carousel.Caption className="text-light w-50 mx-auto bg rounded">
     <h2>TOURS SEARCH PAGE</h2>
     
   </Carousel.Caption>
   </Carousel.Item>
               
 <Carousel.Item>
   <img
     className="d-block w-100"
     
     src={banner3}
     alt="Third slide"
   />

   <Carousel.Caption className="text-light w-50 mx-auto bg rounded">
   <h2>TOURS SEARCH PAGE</h2>
     
   </Carousel.Caption>
 </Carousel.Item>
   </Carousel>   
       </div>
    );
};

export default Banner;