import React from 'react'
import { FaTruckMoving, FaRegCreditCard, FaCheckDouble, FaRegComments } from 'react-icons/fa'

const cols = [
    {icon: <FaTruckMoving />, title: 'Free Delivery', text: 'Orders over $100'},
    {icon: <FaRegCreditCard />, title: 'Secure Payment', text: '100% Secure Payment'},
    {icon: <FaCheckDouble />, title: 'Money Back Guarantee', text: 'Within 30 Days'},
    {icon: <FaRegComments />, title: '24/7 Support', text: 'Within 1 Business Day'}
];

export default function HomeRow() {
    return (
        <div className='home-services-container'>
            <div className='home-services'>
                {
                    cols.map((col, index) =>
                        <div className='home-service' key={index}>
                            {col.icon}
                            <div>
                                <h4>{col.title}</h4>
                                <p>{col.text}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
