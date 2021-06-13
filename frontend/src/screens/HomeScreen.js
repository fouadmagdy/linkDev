import React from 'react'
import Slider from '../components/Slider';
import Investments from '../screens/Investments';
import LatestNews from '../screens/LatestNews';

const HomeScreen = () => {
    return (
        <>
            <Slider />
            <LatestNews />
            <Investments />
        </>
    )
}

export default HomeScreen
