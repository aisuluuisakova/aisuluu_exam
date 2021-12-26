import React, {Component} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/IMG_9633 2.jpg'
import img2 from './images/PHOTO-2020-12-03-12-27-56.jpg'
import img3 from './images/PHOTO-2020-12-13-11-24-05.jpg'
import img4 from './images/PHOTO-2020-12-18-10-42-47.jpg'


export default class Carousel1 extends Component{
  render(){
    return(
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-70 h-50"
          src={img1}
          alt="dress"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-70 h-50"
          src={img2}
          alt="dress"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-70 h-50"
          src={img3}
          alt="dress"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-70 h-50"
          src={img4}
          alt="dress"/>
        </Carousel.Item>
      </Carousel>
    )
  }
}