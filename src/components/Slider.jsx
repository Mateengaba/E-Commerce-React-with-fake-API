import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css ';

// import {Carousel} from 'react-bootstrap';
import { Carousel } from 'antd';
import "./slide.css"


import Blue from '../assets/Blueslider.webp'
import Greenslide from "../assets/greenslider.webp"
import Pinkslider from "../assets/pinkslider.webp"
import Yallowslider from "../assets/Yellowslider.webp"


const contentStyle = {
  height: '650px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  // background: '#364d79',
  

};




const Slider = () => (
  
  
  <Carousel className='slide' autoplay>
    <div> 
      <img style={contentStyle } width={1300} height={200} src={Blue}text="First slide" />
    </div>

    <div>
      <img style={contentStyle} width={1300} height={200} src={Greenslide}text="First slide" />
    </div>

    <div>
      <img style={contentStyle} width={1300} height={200} src={Pinkslider}text="First slide" />
    </div>

    <div>
      <img style={contentStyle} width={1300} height={200} src={Yallowslider}text="First slide" />
    </div>
  </Carousel>


);



      



export default Slider
