import React from 'react'

export default function ForgotPsw({changeBar}) {
    return (
        <form>
            <label htmlFor='mail'>Email *</label>
            <input type='email' className='inp' placeholder='creativelayers088@gmail.com' id='mail' required />
            <button type='submit' className='btn btn-text btn-text-reg'>
                Recover Password
            </button>
            <div className='goLogin'>
                <p>Remember your password?</p>
                <button type='button' className='btn' onClick={() => changeBar(0)}>
                    Login
                </button>
            </div>
        </form>
    )
}
