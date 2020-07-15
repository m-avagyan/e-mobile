import React from 'react'
import footerImg from './../../images/footer.png'

export default function FooterMain() {
    return (
        <div className='footer-main'>
            <p>2020 E-mobile<sup>&copy;</sup>. All rights reserved</p>
            <img src={footerImg} alt='Online shopping cards' />
        </div>
    )
}
