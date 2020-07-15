import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { likeItem, removeLike } from '../../redux/action';

export default function Item({item, itemClass}) {
    const dispatch = useDispatch();
    const changeLike = () => {
        item.like ? dispatch(removeLike(item.id)) : dispatch(likeItem(item))
    };

    return (
        <div className={itemClass}>
            <div className='item-header'>
                <span>${item.price}</span>
                <button type='button' className='btn' onClick={() => changeLike()}>
                    {item.like ? <FaHeart style={{color: '#ff6347'}} /> : <FaRegHeart />}
                </button>
            </div>
            <div className='img-box'>
                <Link to={process.env.PUBLIC_URL + `/${item.name.toLowerCase().replace(/ /g, '_')}`}>
                    <img src={item.photo} alt={item.name} />
                </Link>
            </div>
            <div className='item-main'>
                <div className='item-info'>
                    <h5>{item.name}</h5>
                    <h6>{item.year}</h6>
                    <p>RAM {item.ram}, Memory {item.memory}</p>
                </div>
                <div className='item-btn'>
                    <Link to={process.env.PUBLIC_URL + `/${item.name.toLowerCase().replace(/ /g, '_')}`}>
                        Add To Cart
                    </Link>
                </div>
            </div>
        </div>
    )
}
