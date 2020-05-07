/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Odara Restaurante",
    description: "Cozinha afro-brasileira, ancestralidade e axé",
    author: "Kayê Holanda"
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options:{
        name: "fonts",
        path: `${__dirname}/static/fonts/`
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/icon.png"
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
