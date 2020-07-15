import React from 'react'

export default function PricingItem({price, title}) {
    return (
        <div className='pricing-item'>
            <div className='pricing-title'>
                <h2>{title}</h2>
                <h3>${price}</h3>
                <p>Per Month</p>
            </div>
            <div className='pricing-main'>
                <p>400+ pages</p>
                <p>Quality and Customer Experience</p>
                <p>Power And Predictive Dialing</p>
                <p>24/7 phone and email support</p>
            </div>
            <button type='button' className='btn'>
                Get Started
            </button>
        </div>
    )
}
