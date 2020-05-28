import React from 'react'

import Header from './header'
import Footer from './footer'

import '../style/index.scss'
import layoutStyle from './layout.module.scss'

const Layout = (props) => {
    const goUp = "goUp"
    return(
        <div className={layoutStyle.container}>
            <div className={layoutStyle.content}>
            <Header test = {goUp}/>
            {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout