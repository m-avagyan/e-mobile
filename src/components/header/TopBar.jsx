import React from 'react'
import { FaInstagram, FaYoutube, FaTwitter, FaUser, FaHeart, FaShoppingBag, FaFacebook } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export default function TopBar({changeUserbar, changeShopbar, changeLikebar}) {
    const shops = useSelector(state => state.states.shops);
    const likes = useSelector(state => state.states.likes);
    return (
        <div className='top-bar'>
            <div className='soc-site'>
                <button type='button' className='btn btn-top' >
                    <FaInstagram />
                </button>
                <button type='button' className='btn btn-top' >
                    <FaFacebook />
                </button>
                <button type='button' className='btn btn-top' >
                    <FaYoutube />
                </button>
                <button type='button' className='btn btn-top' >
                    <FaTwitter />
                </button>
            </div>
            <div className='btn-group'>
                <button type='button' className='btn btn-top' onClick={changeUserbar} >
                    <FaUser />
                </button>
                <button type='button' className='btn btn-top' onClick={changeLikebar} >
                    <FaHeart />
                    {likes.length > 0 && <span>{likes.length > 9 ? '9+' : likes.length}</span>}
                </button>
                <button type='button' className='btn btn-top' onClick={changeShopbar} >
                    <FaShoppingBag />
                    {shops.length > 0 && <span>{shops.length > 9 ? '9+' : shops.length}</span>}
                </button>
            </div>
        </div>
    )
}
