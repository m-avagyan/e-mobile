import React from 'react'

export default function Register({changeBar}) {
    return (
        <form>
            <label htmlFor='mail'>Email *</label>
            <input type='email' className='inp' placeholder='creativelayers088@gmail.com' id='mail' required />
            <label htmlFor='psw'>Password *</label>
            <input type='password' className='inp' id='psw' required />
            <label htmlFor='psw2'>Confirm Password *</label>
            <input type='password' className='inp' id='psw2' required />
            <button type='submit' className='btn btn-text btn-text-reg'>
                Create Account
            </button>
            <div className='goLogin'>
                <p>Already have an account?</p>
                <button type='button' className='btn' onClick={() => changeBar(0)}>
                    Login
                </button>
            </div>
        </form>
    )
}
