import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyle from './footer.module.scss'

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
        <footer class={footerStyle.footer}>
            <p>Creat by {data.site.siteMetadata.author}, © 2020</p>
        </footer>
    )
}

export default Footer