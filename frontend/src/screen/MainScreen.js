import React, { useState } from 'react';
import ControlledCarousel from '../component/Carousel/Carousel';

const MainScreen = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
        <ControlledCarousel />
        </div>
    )
}

export default MainScreen