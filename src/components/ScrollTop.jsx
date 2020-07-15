import React, {useState} from 'react'
import { FaAngleUp } from 'react-icons/fa' 

export default function ScrollTop() {
    const [btnClass, setBtnClass] = useState('btn btn-scroll');
    
    window.onscroll = function() {
        btnDisplay()
    };

    function btnDisplay() {
        if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
            setBtnClass('btn btn-scroll btn-display')
        } else {
            setBtnClass('btn btn-scroll')
        }
    }

    function scrollTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <button type='button' className={btnClass} onClick={scrollTop}>
            <FaAngleUp />
        </button>
    )
}
