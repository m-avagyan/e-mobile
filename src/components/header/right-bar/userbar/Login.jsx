import React from 'react'

export default function Login({changeBar}) {
    return (
        <form>
            <label htmlFor='mail'>Username or email *</label>
            <input type='email' className='inp' placeholder='creativelayers088@gmail.com' id='mail' required />
            <label htmlFor='psw'>Password *</label>
            <input type='password' className='inp' id='psw' required />
            <div>
                <span>
                    <input type='checkbox' id='check' />
                    <label htmlFor='check'>Remember me</label>
                </span>
                <button type='button' className='btn' onClick={() => changeBar(2)}>
                    Forgot Password?
                </button>
            </div>
            <button type='submit' className='btn btn-text'>
                Sign In
            </button>
            <button type='button' className='btn btn-text btn-text2' onClick={() => changeBar(1)}>
                Create Account
            </button>
        </form>
    )
}
