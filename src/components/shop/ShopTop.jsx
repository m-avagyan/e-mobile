import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight, FaTimes } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { filterItems } from '../../redux/action';

export default function ShopTop() {
    const searchVal = useSelector(state => state.states.searchVal);
    const filterVal = useSelector(state => state.states.filterVal);
    const dispatch = useDispatch(); 

    return (
        <div className='shop-top'>
            <p className='left-text'>
                {!searchVal.length ? 'Search all keywords' : `Search by keyword: '${searchVal}'`}
            </p>
            <p className='right-text'>
                <span>
                    <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
                </span>
                <span>
                    <FaAngleRight />
                    <Link to={process.env.PUBLIC_URL + '/shop'}>Shop</Link>
                </span>
                {
                    !filterVal.length ? '' :
                    <span>
                        <FaAngleRight />
                        <button type='button' className='btn' onClick={() => dispatch(filterItems(''))}>
                            {filterVal} 
                            <FaTimes />
                        </button>
                    </span>
                }
            </p>
        </div>
    )
}
