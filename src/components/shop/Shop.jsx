import React, {useEffect} from 'react'
import Filters from './Filters'
import Items from './Items'
import ShopTop from './ShopTop'

export default function Shop() {
    useEffect(() => {
        document.title = 'Shop | E-mobile'
    }, [])
    
    return (
        <>
            <ShopTop />
            <div className='container'>
                <div className='shop-container'>
                    <Filters />
                    <Items />
                </div>
            </div>
        </>
    )
}
