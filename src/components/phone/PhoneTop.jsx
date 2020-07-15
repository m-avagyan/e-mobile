import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

export default function PhoneTop({item}) {
    return (
        <div className='shop-top'>
            <p className='left-text'>
                {item.brand}
            </p>
            <p className='right-text'>
                <span>
                    <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
                </span>
                <span>
                    <FaAngleRight />
                    <Link to={process.env.PUBLIC_URL + '/shop'}>Shop</Link>
                </span>
                <span>
                    <FaAngleRight />
                    {item.name}
                </span>
            </p>
        </div>
    )
}
