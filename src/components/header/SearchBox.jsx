import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { searchItems, filterItems } from '../../redux/action';

export default function SearchBox() {
    const searchVal = useSelector(state => state.states.searchVal);
    const dispatch = useDispatch();

    return (
        <div className='search-box'>
            <form onSubmit={(e) => e.preventDefault()}>
                <button type='button' className='btn'>
                    <Link to={process.env.PUBLIC_URL + '/shop'}><FaSearch /></Link>
                </button>
                <input 
                    type='search'
                    placeholder='Search...'
                    maxLength='28'
                    value={searchVal}
                    onChange={(e) => {
                        dispatch(filterItems(''));
                        dispatch(searchItems(e.target.value));
                    }}
                />
            </form>
        </div>
    )
}
