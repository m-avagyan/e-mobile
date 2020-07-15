import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight} from 'react-icons/fa'
import slide1 from './../../images/slide1.png'

export default function New() {
    return (
        <div className='home-new'>
            <div className='categories-top'>
                <h3>New In E-mobile</h3>
                <Link to={process.env.PUBLIC_URL + '/shop'}>
                    All News
                    <FaAngleRight /> 
                </Link>
            </div>
            <div className='new-container'>
                <div>
                    <p>AVAILABLE ONCE A MONTH</p>
                    <h2>Get 50% off on orders over $599</h2>
                    <button type='button' className='btn'>
                        See More
                    </button>
                </div>
                <img src={slide1} alt='iphones' />
            </div>
        </div>
    )
}
