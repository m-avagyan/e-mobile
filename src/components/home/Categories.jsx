import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight, FaApple, FaAndroid, FaMicrochip, FaCamera } from 'react-icons/fa'

const links = [<FaApple />, <FaAndroid />, <FaMicrochip />, <FaCamera />];

export default function Categories() {
    return (
        <div className='categories'>
            <div className='categories-top'>
                <h3>Featured Categories</h3>
                <Link to={process.env.PUBLIC_URL + '/shop'}>
                    All Categories
                    <FaAngleRight /> 
                </Link>
            </div>
            <div className='categories-cols'>
                {
                    links.map((link, index) =>
                        <div className='categories-link' key={index}>
                            <Link to={process.env.PUBLIC_URL + '/shop'}>
                                {link}
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
