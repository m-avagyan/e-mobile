import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

export default function Question({answer, ansClass, changeInd}) {
    return (
        <div className={ansClass}>
            <button type='button' className='btn' onClick={() => changeInd()}>
                <span>{answer}</span>
                <FaAngleDown />
            </button>
            <div>
                <p>
                    A placerat ac vestibulum integer vehicula suspendisse nostra aptent 
                    fermentum tempor a magna erat ligula parturient curae sem conubia vestibulum 
                    ac inceptos sodales condimentum cursus nunc mi consectetur condimentum.
                </p>
                <p>
                    Tristique parturient nulla ullamcorper at ullamcorper non orci iaculis neque augue.
                </p>
            </div>
        </div>
    )
}
