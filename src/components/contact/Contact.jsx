import React, {useEffect} from 'react'
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook, FaPinterest } from 'react-icons/fa'

export default function Contact() {
    useEffect(() => {
        document.title='Contact Us | E-mobile'
    }, [])
    
    return (
        <>
            <h2 className='page-title'>Contact Us</h2>
            <iframe className='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835253576489!2d144.95372995111143!3d-37.
                817327679652266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!
                2sEnvato!5e0!3m2!1sen!2sin!4v1581584770980!5m2!1sen!2sin' title='map' />
            <div className='md-container'>
                <h2>Contact Information</h2>
                <p>We will answer any questions you may have about our online sales, rights or partnership service right here.</p>
                <div className='contact'>
                    <div className='contact-col'>
                        <h4>New York Office</h4>
                        <div>
                            <p>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
                            <p>United States</p>
                        </div>
                        <p>sale@e-mobile.com</p>
                        <p>+1 246-345-0695</p>
                    </div>
                    <div className='contact-col'>
                        <h4>London Office</h4>
                        <div>
                            <p>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
                            <p>United States</p>
                        </div>
                        <p>sale@e-mobile.com</p>
                        <p>+1 246-345-0695</p>
                    </div>
                </div>
                <div className='soc-contact'>
                    <h4>Social Media</h4>
                    <div>
                        <FaInstagram />
                        <FaFacebook />
                        <FaTwitter />
                        <FaYoutube />
                        <FaPinterest />
                    </div>
                </div>
                <h2>Get In Touch</h2>
                <div className='contact-form'>
                    <form>
                        <div className='inp-group inp-row'>
                            <div>
                                <label htmlFor='Name'>Name</label>
                                <input type='text' className='inp' id='name' required />
                            </div>
                            <div>
                                <label htmlFor='mail2'>Email</label>
                                <input type='email' className='inp' id='mail2' required />
                            </div>
                        </div>
                        <div className='inp-group'>
                            <label htmlFor='subject'>Subject</label>
                            <input type='text' className='inp' required id='subject' />
                        </div>
                        <div className='inp-group'>
                            <label htmlFor='text'>Details please! Your review helps other shoppers</label>
                            <textarea 
                                placeholder='What did you like or dislike? What should other shoppers know before buying?'
                                id='text' className='inp inp-text' required>
                            </textarea>
                        </div>
                        <button type='submit' className='btn'>
                            Sumbit Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
