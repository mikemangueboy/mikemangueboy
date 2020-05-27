import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

import blogStyle from './blog.module.scss'

import Head from '../components/head'

const BlogPage = () => {
        const data = useStaticQuery(graphql`
            query {
               allContentfulBlogPost ( sort: {  fields: publishedDate, order: DESC }) {
                   edges {
                       node {
                           title
                           slug
                           publishedDate(formatString: "MMMM Do, YYYY")
                       }
                   }

               }
            }
        `)

    return (
        <Layout>
            <Head title = 'Blog'/>
        <h1>Blog</h1>
        <ol class={blogStyle.posts}>
            {data.allContentfulBlogPost.edges.map((edge) =>{
                return (
                    <li class={blogStyle.post}>
                        <Link to={`/blog/${edge.node.slug}`}>
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.publishedDate}</p>
                        </Link>
                    </li>
                )
            })}
        </ol>
        </Layout>
    )
}

export default BlogPage