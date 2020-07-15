import React, {useState} from 'react'
import { FaStar, FaRegHeart, FaShareAlt, FaHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removeLike, likeItem, addShop } from '../../redux/action';

export default function PhoneInfo({item}) {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const changeLike = () => {
        item.like ? dispatch(removeLike(item.id)) : dispatch(likeItem(item))
    };
    const addToShop = () => {
        !item.shop && dispatch(addShop({item, count}))
    };

    const changeCount = (n) => {
        if(count === 1) {
            if(n === 1) {
                setCount(count + n)
            }
        }else {
            setCount(count + n)
        }
    }

    return (
        <div className='phone-info'>
            <div className='phone-info-top'>
                <span>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </span>
                <button type='button' className='btn' onClick={() => changeLike()}>
                {item.like ? <FaHeart style={{color: '#ff6347'}} /> : <FaRegHeart />}
                </button>
            </div>
            <div className='phone-info-main'>
                <h3>{item.name}</h3>
                <h4>${item.price} x {count}</h4>
                <h5>OS: {item.os}</h5>
                <h6>OS Version: {item.osv}</h6>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Maiores optio pariatur numquam repellendus accusamus tempore nemo aut atque sed cupiditate.
                </p>
            </div>
            <div className='phone-btn-group'>
                <div>
                    <span>
                        <button type='button' className='btn' onClick={() => changeCount(-1)}>
                            -
                        </button>
                        {count}      
                        <button type='button' className='btn' onClick={() => changeCount(1)}>
                            +
                        </button>
                    </span>
                    <button type='button' 
                        className='btn btn-cart'
                        onClick={() => addToShop()}
                        style={item.shop ? {backgroundColor: '#999', cursor: 'inherit', letterSpacing: '.5px'} : {backgroundColor: '#191919'}}
                    >
                        Add To Cart
                    </button>
                </div>
                <button type='button' className='btn btn-share'>
                    <FaShareAlt />
                </button>
            </div>
        </div>
    )
}
