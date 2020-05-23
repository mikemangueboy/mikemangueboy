module.exports = {
    siteMetadata: {
        title: 'Mike',
        author: 'Mayck Brito'
    },
    plugins: [
          'gatsby-plugin-sass',
      {
        resolve: "gatsby-source-filesystem",
        options: { name: "src", path: `${__dirname}/src/` },
      },
      "gatsby-transformer-remark"
    ]
}
     