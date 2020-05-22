module.exports = {
    siteMetadata: {
        title: 'Mike',
        author: 'Mayck Brito'
    },
    plugins: [
        'gatsby-plugin-sass',

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'scr',
                path: `${__dirname}/scr/`
            }
        }
    ]    
}