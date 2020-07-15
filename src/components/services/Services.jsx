import React, {useEffect} from 'react'
import Pricing from './Pricing'

export default function Services() {
    useEffect(() => {
        document.title = 'Services | E-mobile'
    }, [])

    return (
        <>
            <h2 className='page-title'>Our Services</h2>
            <div className='top-bg services-bg'></div>
            <div className='md-container'>
                <h2>Welcome to E-mobile</h2>
                <p>
                    “ Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
                    search for eolved over sometimes by accident, sometimes on purpose ”
                </p>
                <div className='about-text'>
                    <h4>What we really do?</h4>
                    <p>
                        Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. 
                        Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. 
                        Proin sed ultrices erat. Praesent varius ultrices massa at faucibus. 
                        Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, 
                        sit amet condimentum mi ligula sit amet augue. Pellentesque vitae eros 
                        eget enim mollis placerat. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. 
                        Proin sed ultrices erat. Praesent varius ultrices massa at faucibus. 
                        Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, 
                        sit amet condimentum mi ligula sit amet augue. Pellentesque vitae eros eget enim mollis placerat.
                    </p>
                </div>
                <div className='about-text-cols'>
                    <div>
                        <h4>Our Vision</h4>
                        <p>
                            Pellentesque sodales augue eget ultricies ultricies. 
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            Curabitur sagittis ultrices condimentum.
                        </p>
                    </div>
                    <div>
                        <h4>Why We</h4>
                        <p>
                            Pellentesque sodales augue eget ultricies ultricies. 
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            Curabitur sagittis ultrices condimentum.
                        </p>
                    </div>
                </div>
            </div>
            <Pricing />
        </>
    )
}
