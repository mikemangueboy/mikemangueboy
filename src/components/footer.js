import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyle from './footer.module.scss'
import scrollTo from 'gatsby-plugin-smoothscroll';

import buttonStyle from './buttom.module.scss'
 

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }    
    `)
    
    return (
        <footer className={footerStyle.footer}>
            <p>Creat by {data.site.siteMetadata.author}, © 2020</p>
            <button className={buttonStyle.goUp} onClick={() => scrollTo('#goUp')}>Up</button>
        </footer>
    )
}

export default Footer