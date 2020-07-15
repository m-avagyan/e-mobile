import React, {useState} from 'react'
import TopBar from './TopBar'
import Menu from './Menu'
import Userbar from './right-bar/userbar/Userbar'
import Shopbar from './right-bar/Shopbar'
import Likebar from './right-bar/Likebar'

export default function Header() {
    const [sidebar, setSidebar] = useState(false);
    const [userbar, setUserbar] = useState(false);
    const [shopbar, setShopbar] = useState(false);
    const [likebar, setLikebar] = useState(false);

    const changeSidebar = () => {
        sidebar
        ? setSidebar(false)
        : setSidebar(true)
    };

    const changeUserbar = () => {
        userbar
        ? setUserbar(false)
        : setUserbar(true)
    };

    const changeShopbar = () => {
        shopbar
        ? setShopbar(false)
        : setShopbar(true)
    };

    const changeLikebar = () => {
        likebar
        ? setLikebar(false)
        : setLikebar(true)
    };

    const closePage = () => {
        setSidebar(false);
        setUserbar(false);
        setShopbar(false);
        setLikebar(false)
    };

    return (
        <div className='header'>
            {(sidebar || userbar || shopbar || likebar)
            && <div className='page' onDoubleClick={closePage}></div>}
            <Userbar changeUserbar={changeUserbar} barStyle={userbar ? {right: 0} : {right: '-100%'}} />
            <Shopbar changeShopbar={changeShopbar}  barStyle={shopbar ? {right: 0} : {right: '-100%'}} />
            <Likebar changeLikebar={changeLikebar} barStyle={likebar ? {right: 0} : {right: '-100%'}} />
            <TopBar
                changeUserbar={changeUserbar}
                changeShopbar={changeShopbar}
                changeLikebar={changeLikebar}
            />
            <Menu
                changeSidebar={changeSidebar}
                sidebar={sidebar}
            />
        </div>
    )
}
