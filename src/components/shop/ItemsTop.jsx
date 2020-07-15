import React from 'react'
import { FaTh, FaList } from 'react-icons/fa'

export default function ItemsTop({items, changeItemStyle, itemRow, indexTo}) {
    return (
        <div className='items-top'>
            <p>Showing {indexTo / 12}–{Math.ceil(items.length / 12)} of {items.length} results</p>
            <div className='items-btn-group'>
                <button type='button'
                    className='btn'
                    onClick={() => changeItemStyle(false)}
                    style={!itemRow ? {color: '#191919'} : {color: '#ccc'}}
                >
                    <FaTh />
                </button>
                <button type='button'
                    className='btn btn-row'
                    onClick={() => changeItemStyle(true)}
                    style={itemRow ? {color: '#191919'} : {color: '#ccc'}}
                >
                    <FaList />
                </button>
            </div>
        </div>
    )
}
