import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function SideBar({ links, sidebarStyle, changeSidebar }) {
    return (
        <div className='sidebar-container' style={sidebarStyle} >
            <div className='sidebar-title'>
                <h4>E-mobile</h4>
                <button type='button' className='btn' onClick={changeSidebar} >
                    <FaTimes />
                </button>
            </div>
            <div className='sidebar'>
                {links.map((link, index) => 
                    <NavLink to={process.env.PUBLIC_URL + '/' + link.toLowerCase().replace(/ /g, '_')} key={index} onClick={changeSidebar}> 
                        {link}
                    </NavLink>
                )}
            </div>
        </div>
    )
}
