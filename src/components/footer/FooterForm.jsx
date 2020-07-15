import React from 'react'

export default function FooterForm() {
    return (
        <div className='footer-form'>
            <h3>Join Our Newsletter</h3>
            <p>Signup to be the first to hear about exclusive deals, special offers and upcoming collections</p>
            <form>
                <input type='text' className='inp' placeholder='Enter email for weekly newsletter.' required />
                <button type='button' className='btn'>
                    Subscribe
                </button>
            </form>
        </div>
    )
}
