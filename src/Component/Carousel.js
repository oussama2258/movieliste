import React from 'react'
import Carousel from 'react-bootstrap/Carousel'  

const Carsel = () => {
    return (
        <div>
 <Carousel className="carousl">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/918281/pexels-photo-918281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Second slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1507388644107-ce16cdf15eba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      alt="Third slide"
    />

    
  </Carousel.Item>

<Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2017/10/03/15/03/titan-2812785_960_720.jpg"
      alt="Second slide"
    />

   
  </Carousel.Item>
  </Carousel>
        </div>
    )
}

export default Carsel
