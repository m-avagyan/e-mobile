import React, {useState} from 'react'
import slideDefault1 from './../../images/items/xr6p.jpg'
import slideDefault2 from './../../images/items/i7p.jpg'
import slideDefault3 from './../../images/items/lvs1.jpg'

export default function PhoneSlide({item}) {
    const [ind, setInd] = useState(0);
    const slideImg = [item.photo, slideDefault1, slideDefault2, slideDefault3];

    return (
        <div className='phone-slide'>
            <div className='phone-slide-container'>
                {
                    slideImg.map((photo, index) => 
                        <img src={photo} alt={item.name} key={index} style={ind === index ? {width: '100%'} : {width: 0}} />
                    )
                }
            </div>
            <div className='dots'>
            {
                slideImg.map((photo, index) => 
                    <span key={index} onClick={() => setInd(index)} style={ind === index ? {background: '#999'} : {background: '#ccc'}}></span>
                )
            }
            </div>
        </div>
    )
}
