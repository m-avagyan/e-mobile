import React from 'react'
import PricingItem from './PricingItem'

export default function Pricing() {
    return (
        <div className='pricing'>
            <PricingItem title='Starter' price='99' />
            <PricingItem title='Basic' price='199' />
            <PricingItem title='Professional' price='399' />
            <PricingItem title='Enterprise' price='899' />
        </div>
    )
}
