import React, {useState} from 'react'
import { FaTimes, FaUser, FaQuestionCircle, FaUserPlus } from 'react-icons/fa'
import Login from './Login'
import Register from './Register'
import ForgotPsw from './ForgotPsw'

export default function Userbar({changeUserbar, barStyle}) {
    const [ind, setInd] = useState(0);

    const changeBar = (n) => {
        setInd(n)
    }

    const userbar = [
        {title: 'Account', icon: <FaUser />, cmp: <Login changeBar={changeBar} />},
        {title: 'Create Account', icon: <FaUserPlus />, cmp: <Register changeBar={changeBar} />},
        {title: 'Forgot Password?', icon: <FaQuestionCircle />, cmp: <ForgotPsw changeBar={changeBar} /> }
    ];

    return (
        <div className='right-bar' style={barStyle}>
            <div className='right-bar-title'>
                {userbar.map((bar, index) => 
                    ind === index && <div key={index}><h4>{bar.icon} {bar.title}</h4></div>
                )}
                <button type='button' className='btn' onClick={changeUserbar}>
                    <FaTimes />
                </button>
            </div>
            <div className='right-bar-container'>
                {userbar.map((bar, index) => 
                    ind === index && <div key={index}>{bar.cmp}</div>
                )}
            </div>
        </div>
    )
}
