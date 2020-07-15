import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

export default function Pagination({items, indexTo, changeItemsPage, controlItemsPage}) {
    return (
        <div className='pagination'>
            <button type='button' className='btn btn-control' onClick={() => controlItemsPage(-12)}>
                <FaAngleLeft />
            </button>
            {
                items.map((item, index) =>
                    index < items.length / 12 &&
                    <button
                        type='button'
                        className={indexTo / 12 === index + 1 ? 'btn active-control' : 'btn'}
                        key={index}
                        onClick={() => changeItemsPage(index)}
                    >
                        {index + 1}
                    </button>
                )
            }
            <button type='button' className='btn btn-control' onClick={() => controlItemsPage(12)}>
                <FaAngleRight />
            </button>
        </div>
    )
}
