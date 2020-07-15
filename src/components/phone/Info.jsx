import React from 'react'

export default function Info({desc}) {
    return (
        <div className='info'>
            <div className='icon'>
                {desc.icon}
            </div>
            <div className='desc'>
                <div>
                    <p><span>{desc.param1}</span></p>
                    <p><span>{desc.param2}</span></p>
                    <p><span>{desc.param3}</span></p>
                </div>
                <div>
                    <p>{desc.val1}</p>
                    <p>{desc.val2}</p>
                    <p>{desc.val3}</p>
                </div>
            </div>
        </div>
    )
}
