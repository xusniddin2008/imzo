import React from 'react';
import { Carousel } from 'react-bootstrap';
import ocean from '../ocean.jpg';

export default function Slider() {
    return (
       <Carousel>
           <Carousel.Item style={{'height': '600px'}}>
                <img className="d-block w-100" src={ocean} alt="First slide" />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Do do nostrud est aliqua.</p>
                </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item style={{'height': '600px'}}>
                <img className="d-block w-100" src={ocean} alt="First slide" />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Do do nostrud est aliqua.</p>
                </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item style={{'height': '600px'}}>
                <img className="d-block w-100" src={ocean} alt="First slide" />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Do do nostrud est aliqua.</p>
                </Carousel.Caption>
           </Carousel.Item>
       </Carousel>
    )
}