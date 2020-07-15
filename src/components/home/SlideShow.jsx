import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import slide1 from './../../images/slide1.png'
import slide2 from './../../images/slide2.png'
import slide3 from './../../images/slide3.png'

const slides = [
    {
        title: 'APPLE iPHONE 11 PRO',
        photo: slide1
    },
    {
        title: 'APPLE iPHONE X',
        photo: slide2
    },
    {
        title: 'SAMSUNG A70',
        photo: slide3
    }
];

export default function SlideShow() {
    return (
        <Slider>
            {slides.map((slide, index) => 
                <div key={index}>
                    <div className='slide-main'>
                        <h3>THERE'S A SALE!</h3>
                        <h2>{slide.title}</h2>
                        <p>
                            Manufacturers, suppliers and others provide what you see here, 
                            and we have not verified it.
                        </p>
                        <button type='button' className='btn'>
                            See More
                        </button>
                    </div>
                    <div className='slide-img'>
                        <img src={slide.photo} alt='Phones' />
                    </div>
                </div>
            )}
        </Slider>
    )
}
