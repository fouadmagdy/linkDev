import React from 'react'


import { Image, Button } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';

import './Slider.scss'


import slider1 from '../images/slider1.png'
import slider2 from '../images/slider2.png'
import slider3 from '../images/slider3.png'

const Slider = () => {
    return (
        <OwlCarousel className='owl-theme main-slider' loop margin={10} nav items={1} dots>
            <div className='item position-relative'>
                <Image className='img-fluid main-slider-img' src={slider1} alt="slider1" style={{ filter: 'contrast(0.5)' }} />
                <div className='position-absolute main-slider-singleItem'>
                    <h2>Al Foundation</h2>
                    <p>is focused on inspiring the next generation of kids Healthcare professionals</p>
                    <Button>Donate Now</Button>
                </div>
            </div>
            <div className='item position-relative'>
                <Image className='img-fluid main-slider-img' src={slider2} alt="slider2" style={{ filter: 'contrast(0.5)' }} />
                <div className='position-absolute main-slider-singleItem'>
                    <h2>Al Foundation</h2>
                    <p>is focused on inspiring the next generation of kids Healthcare professionals</p>
                    <Button>Donate Now</Button>
                </div>
            </div>
            <div className='item position-relative'>
                <Image className='img-fluid main-slider-img' src={slider3} alt="slider3" style={{ filter: 'contrast(0.5)' }} />
                <div className='position-absolute main-slider-singleItem'>
                    <h2>Al Foundation</h2>
                    <p>is focused on inspiring the next generation of kids Healthcare professionals</p>
                    <Button>Donate Now</Button>
                </div>
            </div>
        </OwlCarousel>
    )
}

export default Slider
