import React, {useEffect} from 'react'
import SlideShow from './SlideShow'
import Categories from './Categories'
import New from './New'
import Pricing from './../services/Pricing'
import HomeRow from './HomeRow'
import Aside from './Aside'

export default function Home() {
    useEffect(() => {
        document.title = 'Home | E-mobile'
    }, [])

    return (
        <>
            <SlideShow />
            <div className='container'>
                <Categories />
                <New />
                <Aside />
            </div>
            <HomeRow />
            <Pricing />
        </>
    )
}
