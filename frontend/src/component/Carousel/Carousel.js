import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import { Image } from 'react-bootstrap';


const ControlledCarousel = ({children}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        // <div className='carousel-outer'>
        <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
            <Image
            className="d-block w-100"
            src={require("../component_image/mainscreen_img1.png")}
            alt="First slide"
            />
            {/* <div className='d-block w-100-item carousel-item'>
                item1
            </div> */}
            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            <Image
            className="d-block w-100"
            src={require("../component_image/mainscreen_img2.png")}
            alt="Second slide"
            />
            {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
        <Image
            className="d-block w-100"
            src={require("../component_image/mainscreen_img3.png")}
            alt="Third slide"
            />

            {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption> */}
        </Carousel.Item>
        </Carousel>
        // </div>
    );
}

export default ControlledCarousel;