import React, { useState } from 'react';
import ControlledCarousel from '../component/Carousel/Carousel';
import GridCard, {Groupexample} from '../component/GridCard';
import PageTitle from '../component/PageTitle';
import GroupCard from '../component/GroupCard';

const MainScreen = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
        <ControlledCarousel />
        {/* <PageTitle /> */}
        <GridCard  title="Introduction" text="Build your website without any code in our visual canvas - try today for absolutely free. Building a site doesn't need to involve coding - design and build with our visual canvas. Get started with one of our best-in-class website templates and customize it to fit your needs."/>
        <GroupCard title="Develop Group" />

        </div>
    )
}

export default MainScreen