/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options:{
        name: "fonts",
        path: `${__dirname}/static/fonts/`
      }
    }
  ]
}
