import React from 'react'
import Navbar from './Navbar'
import SearchBox from './SearchBox'


export default function Menu({sidebar, changeSidebar}) {
    return (
        <div className='menu'>
            <Navbar changeSidebar={changeSidebar} sidebar={sidebar} />
            <SearchBox />
        </div>
    )
}
