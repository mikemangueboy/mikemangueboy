import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
        <h2>I'm Mike, I try to develop, and living in the most hottest city in the world Recife.</h2>
        <p>Need a developer or read good things?<Link to='/contact'> Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage    
