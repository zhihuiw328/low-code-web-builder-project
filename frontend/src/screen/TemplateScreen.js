import React, { useState } from 'react';
import ControlledCarousel from '../component/Carousel/Carousel';

const TemplateScreen = () => {
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

export default TemplateScreen