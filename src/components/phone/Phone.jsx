import React, {useState} from 'react'
import PhoneTop from './PhoneTop'
import Description from './Description'
import PhoneSlide from './PhoneSlide'
import PhoneInfo from './PhoneInfo'

export default function Phone({item}) {
    useState(() => {
        document.title = `${item.name} | E-mobile`
    }, [])
    return (
        <>
            <PhoneTop item={item} />
            <div className='container'>
                <div className='phone-container'>
                    <div className='phone-main'>
                        <PhoneSlide item={item} />
                        <PhoneInfo item={item} />
                    </div>
                    <Description item={item} />
                </div>
            </div>
        </>
    )
}
