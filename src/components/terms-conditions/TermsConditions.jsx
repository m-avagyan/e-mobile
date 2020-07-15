import React from 'react'
import { useEffect } from 'react'
import Term from './Term'

export default function TermsConditions() {
    useEffect(() => {
        document.title = 'Terms & Conditions | E-mobile'
    }, [])

    return (
        <div className='container'>
            <div className='terms-container'>
                <h2>Terms and Conditions</h2>
                <Term title={'Intellectual Propertly'} />
                <Term title={'Termination'} />
                <div>
                    <h3>Changes To This Agreement</h3>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these 
                        Terms and Conditions by posting the updated terms on the Site. 
                        Your continued use of the Site after any such changes constitutes your acceptance of the new Terms and Conditions.
                    </p>
                </div>
                <div>
                    <h3>Hyperlinks</h3>
                    <p>
                        Our website may contain hyperlinks. 
                        These hyperlinks connect you to sites of other organisations which are not our responsibility.
                        We have used our reasonable endeavours in preparing our own website and the information included in it is 
                        done so in good faith. However, we have no control over any of the information you can access via other websites. 
                        Therefore, no mention of any organisation, company or 
                        individual to which our website is linked shall imply any approval or warranty as to the standing and 
                        capability of any such organisations, company or individual on the part of The Book Depository.
                    </p>
                </div>
            </div>
        </div>
    )
}
