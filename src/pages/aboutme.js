import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p> Hi, I don't know how you arrive here, but continue...
                here you will see a lot of things about my world, now
                you think, why I want see something like that, I don't know
                but just see and <b>Enjoy!</b>
                <Link to="/contact">Want to work here? Reach out</Link>
                </p>
        </Layout>
    )
}
export default AboutPage