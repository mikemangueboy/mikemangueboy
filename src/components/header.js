import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyle from './header.module.scss'


const Header = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
        `) 
    return (
        <header className={headerStyle.header}>
            <h1 id={props.test}>
                 <Link data-title="Mike" className={headerStyle.tittle}>
                    {data.site.siteMetadata.title}
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