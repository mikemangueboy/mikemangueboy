import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title='Home' />
        <h3>Olá, seja bem vindo!
            Aqui você vai achar muita coisa que talvez te deixe confuso, ou talvez te faça pensar
            mas é um ambiente pra todos, just enjoy!
        </h3>
        </Layout>
    )
}

export default IndexPage    
