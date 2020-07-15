import React from 'react'
import { FaTimes, FaRegHeart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import Bar from './Bar';
import { removeLike } from '../../../redux/action';

export default function Likebar({barStyle, changeLikebar}) {
    const dispatch = useDispatch();
    const likes = useSelector(state => state.states.likes);

    return (
        <div className='right-bar' style={barStyle}>
            <div className='right-bar-title'>
                <h4><FaRegHeart /> Wishlists</h4>
                <button type='button' className='btn' onClick={changeLikebar}>
                    <FaTimes />
                </button>
            </div>
            <div className='right-bar-container'>
                {!likes.length ? <h3>You didn't like any of the products</h3> :
                    likes.map(like =>
                        <Bar phone={like} key={like.id} closeBar={changeLikebar} remove={() => dispatch(removeLike(like.id))} />
                    ) 
                }
            </div>
        </div>
    )
}
