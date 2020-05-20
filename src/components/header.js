import React from 'react'
import {Link} from 'gatsby'

// import './header.scss'
import './header.scss'


const Header = () => {
    return (
        <header>
            <h1>Mike B</h1>
            <nav>
                <ul>
                    <li>
                        <Link className="link" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/aboutme'>About me</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header