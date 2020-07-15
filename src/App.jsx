import React from 'react'
import './styles/style.scss'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import Services from './components/services/Services'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Faq from './components/faq/Faq'
import TermsConditions from './components/terms-conditions/TermsConditions'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { useSelector } from 'react-redux'
import Phone from './components/phone/Phone'
import ScrollTop from './components/ScrollTop'

export default function App() {
    const items = useSelector(state => state.states.items);
    return (
        <>
            <Header />
            <Switch>
                <Route path={process.env.PUBLIC_URL + '/'} component={Home} exact />
                <Route path={process.env.PUBLIC_URL + '/shop'} component={Shop} />
                <Route path={process.env.PUBLIC_URL + '/services'} component={Services} />
                <Route path={process.env.PUBLIC_URL + '/about_us'} component={About} />
                <Route path={process.env.PUBLIC_URL + '/contact_us'} component={Contact} />
                <Route path={process.env.PUBLIC_URL + '/faq'} component={Faq} />
                <Route path={process.env.PUBLIC_URL + '/terms_conditions'} component={TermsConditions} />
                {
                    items.map(item =>
                        <Route path={process.env.PUBLIC_URL + `/${item.name.toLowerCase().replace(/ /g, '_')}`} key={item.id}>
                            <Phone item={item} />
                        </Route>
                    )
                }
            </Switch>
            <Footer />
            <ScrollTop />
        </>
    )
}
