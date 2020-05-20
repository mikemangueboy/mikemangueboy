import React from 'react'
import {Link} from 'gatsby'

import headerStyle from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <h1>
            <Link className={headerStyle.tittle}>
            Mike Mangueboy
            </Link>
            </h1>
            <nav>
                <ul className={headerStyle.navList}>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to='/aboutme'>About me</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header