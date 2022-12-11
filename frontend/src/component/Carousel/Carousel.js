import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
// const imgIcon = require( '../../../public/logo512.png');


const ControlledCarousel = ({children}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='carousel-outer'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            {/* <img
            // className="d-block w-100"
            src="https://illinois.edu/assets/img/branding/wordmark_vertical.png"
            alt="First slide"
            /> */}
            <div className='d-block w-100-item carousel-item'>
                item1
            </div>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <img
            className="d-block w-100"
            src="../../../public/logo512.png"
            alt="Second slide"
            /> */}
            <div className='d-block w-100-item'>
                item2
            </div>
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <img
            className="d-block w-100"
            src="../../../public/logo512.png"
            alt="Third slide"
            /> */}
            <div className='d-block w-100-item'>
                item3
            </div>
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default ControlledCarousel;




















// export const CarouselItem = ({ children, width }) => {
//   return (
//     <div className='carousel-item'  style={{ width: width}}>
//         {children}
//     </div>
//   );
// };

// const Carousel = ({children}) => {
//     return (
//         <div className='carousel'>
//             <div className='carousel-inner' style={{ transform:"translateX:(-200%)"}}>
//                 {React.Children.map(children, (child, index) => {
//                     return React.cloneElement(child, {width: "100%"});
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Carousel;