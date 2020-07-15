import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { filterItems, searchItems } from '../../redux/action';

export default function Filters() {
    const [brands, setBrands] = useState(true);
    const [oss, setOss] = useState(false);
    const [years, setYears] = useState(false);
    const dispatch = useDispatch();

    const filters = [
        ['Samsung', 'Apple', 'Xiaomi', 'Lenovo', 'Sony'],
        ['iOS', 'Android', 'Windows', 'Linux', 'Symbian'],
        [2020, 2019, 2018, 2017, 2016]
    ];

    const filteringItem = (e) => {
        dispatch(searchItems(''));
        dispatch(filterItems(e));
    }

    return (
        <div className='filters'>
            
            <div className={brands ? 'filter active-filter' : 'filter'}>
                <button type='button' className='btn btn-filter' onClick={brands ? () => setBrands(false) : () => setBrands(true)}>
                    <span>Brands</span>
                    <FaAngleDown />
                </button>
                <div>
                    {filters[0].map((filter, index) =>
                        <input type='button' className='btn inp-filter' onClick={(e) => filteringItem(e.target.value)} key={index} value={filter} />
                    )}
                </div>
            </div>
            <div className={oss ? 'filter active-filter' : 'filter'}>
                <button type='button' className='btn btn-filter' onClick={oss ? () => setOss(false) : () => setOss(true)}>
                    <span>Operation System</span>
                    <FaAngleDown />
                </button>
                <div>
                    {filters[1].map((filter, index) =>
                        <input type='button' className='btn inp-filter' onClick={(e) => filteringItem(e.target.value)} key={index} value={filter} />
                    )}
                </div>
            </div>
            <div className={years ? 'filter active-filter' : 'filter'}>
                <button type='button' className='btn btn-filter' onClick={years ? () => setYears(false) : () => setYears(true)}>
                    <span>Announcement Year</span>
                    <FaAngleDown />
                </button>
                <div>
                    {filters[2].map((filter, index) =>
                        <input type='button' className='btn inp-filter' onClick={(e) => filteringItem(e.target.value)} key={index} value={filter} />
                    )}
                </div>
            </div>
        </div>
    )
}
