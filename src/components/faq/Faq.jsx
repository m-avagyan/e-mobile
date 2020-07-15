import React, {useEffect, useState} from 'react'
import Question from './Question'

export default function Faq() {
    const [ind, setInd] = useState(0);

    useEffect(() => {
        document.title = 'FAQ\'s | E-mobile'
    }, []);

    const answers = [
        [
            'Delivery charges for orders from the Online Shop?',
            'How long will delivery take?',
            'Do I receive an invoice for my order?',
            'Tellus ridicdiam eleifend id ullamcorper?'
        ],
        [
            'When the order payment is taken of my bank account?',
            'What is wishlist?',
            'What should I do if I receive a damaged or wrong product?',
            'Can I change or cancel my order?',
            'What is "package tracking" in my orders?'
        ]
    ];



    return (
        <div className='container'>
            <div className='faq-container'>
                <h2>Frequently Asked Questions</h2>
                <h3>Shopping</h3>
                {
                    answers[0].map((answer, index) => 
                        <Question 
                            key={index}
                            answer={answer}
                            ansClass={ind === index ? 'question active-question' : 'question'}
                            changeInd={() => setInd(index)}
                        />
                    )
                }
                <h3>Payment</h3>
                {
                    answers[1].map((answer, index) => 
                        <Question 
                            key={index}
                            answer={answer}
                            ansClass={ind === index ? 'question active-question' : 'question'}
                            changeInd={() => setInd(index)}
                        />
                    )
                }
            </div>
        </div>
    )
}
