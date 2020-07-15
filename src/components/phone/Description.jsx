import React from 'react'
import Info from './Info'
import { FaMobileAlt, FaExpandAlt, FaCamera, FaMicrochip, FaCog } from 'react-icons/fa'

export default function Description({item}) {
    const descs = [
        {
            icon: <FaMobileAlt />,
            param1: 'Brand',
            param2: 'Model',
            param3: 'Announcement Year',
            val1: item.brand,
            val2: item.name,
            val3: item.year
        },
        {
            icon: <FaMicrochip />,
            param1: 'RAM',
            param2: 'Memory',
            val1: item.ram,
            val2: item.memory
        },
        {
            icon: <FaCamera />,
            param1: 'Front Camera',
            param2: 'Main Camera',
            val1: item.fCamera,
            val2: item.mCamera 
        },
        {
            icon: <FaExpandAlt />,
            param1: 'Screen Size',
            param2: 'Weight',
            val1: item.screen,
            val2: item.weight
        },
        {
            icon: <FaCog />,
            param1: 'Operation System',
            param2: 'OS Version',
            param3: 'Battery Capacity',
            val1: item.os,
            val2: item.osv,
            val3: item.battery
        }
    ];

    return (
        <div className='description'>
            <h2>Description</h2>
            {
                descs.map((desc, index) =>
                    <Info
                        key={index}
                        desc={desc}
                    />
                )
            }
            <p className='desc-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vitae omnis, suscipit nulla facere consequuntur culpa sit eius, 
                aut dicta temporibus hic perspiciatis veniam magni perferendis. 
                Nesciunt, alias numquam. Fuga natus, unde velit, rem molestias 
                eaque praesentium repudiandae officiis temporibus nulla reiciendis nostrum odio, alias ratione.
                Vitae omnis, suscipit nulla facere consequuntur culpa sit eius, 
                aut dicta temporibus hic perspiciatis veniam magni perferendis. 
                Nesciunt, alias numquam. Fuga natus, unde velit, rem molestias 
                eaque praesentium repudiandae officiis temporibus nulla reiciendis nostrum odio, alias ratione.
            </p>
        </div>
    )
}
