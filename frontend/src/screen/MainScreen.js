import React, { useState } from 'react';
import ControlledCarousel from '../component/Carousel/Carousel';
import GridCard from '../component/GridCard';
import PageTitle from '../component/PageTitle';


const MainScreen = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
        <ControlledCarousel />
        <PageTitle />
        <GridCard />
        </div>
    )
}

export default MainScreen