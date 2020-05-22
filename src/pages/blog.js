import React from 'react'
import { graphql, userStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {
        const data = userStaticQuery(graphql`
            query {
                allMarkdownRemark {
                    edges {
                        node {
                            frontmatter {
                                title
                                date
                            }
                        }
                    }
                }
            }
        `)
        
        console.log(data)

    return (
        <Layout>
        <h1>Blog</h1>
        <p>Posts will show up here later on.</p>
        </Layout>
    )
}

export default BlogPage