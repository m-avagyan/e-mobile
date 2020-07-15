import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

export default function Bar({phone, closeBar, remove, count}) {
    return (
        <div className='bar'>
            <div className='bar-img-box'>
                <Link to={process.env.PUBLIC_URL + `/${phone.name.toLowerCase().replace(/ /g, '_')}`} onClick={closeBar}>
                    <img src={phone.photo} alt={phone.name} />
                </Link>
            </div>
            <div className='bar-info'>
                <h5>${phone.price} {count}</h5>
                <h6>{phone.name}</h6>
            </div>
            <button type='button' className='btn' onClick={remove}>
                <FaTimes />
            </button>
        </div>
    )
}
