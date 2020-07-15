import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './../../images/logo.png'
import { FaAlignLeft, FaAngleDown } from 'react-icons/fa'
import SideBar from './SideBar'

export default function Navbar({changeSidebar, sidebar}) {
    const links = [
        ['Shop','Services', 'About Us','Contact Us'],
        ['FAQ', 'Terms Conditions']
    ];

    const sidebarStyle = sidebar
    ? {left: 0}
    : {left: '-320px'};

    return (
        <div className='navbar'>
            <button type='button' className='btn btn-navbar' onClick={changeSidebar}>
                <FaAlignLeft />
            </button>
            <div className='logo'>
                <Link to={process.env.PUBLIC_URL + '/'}>
                    <img src={logo} alt='E-mobile logo' />
                    <h4>E-mobile</h4>
                </Link>
            </div>
            <div className='bars'>
                {links[0].map((link, index) =>
                    <NavLink to={process.env.PUBLIC_URL + '/' + link.toLowerCase().replace(/ /g, '_')} key={index}>{link}</NavLink>
                )}
                <span>
                    Other <FaAngleDown />
                    <span className='dropdown'>
                    {links[1].map((link, index) =>
                        <NavLink to={process.env.PUBLIC_URL + '/' + link.toLowerCase().replace(/ /g, '_')} key={index}>{link}</NavLink>
                    )}
                    </span>
                </span>
            </div>
            <SideBar
                links={links.flat(Infinity)}
                sidebarStyle={sidebarStyle}
                changeSidebar={changeSidebar}
            />
        </div>
    )
}
