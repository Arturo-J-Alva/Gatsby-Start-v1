/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Base WebSite`,
    description: `Descripton Base WebSite`,
    author: `Arturo J Alva`,
    siteUrl: "https://arturo-j-alva.netlify.app/"
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ['/components', '/pages'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Base WebSite`,
        short_name: 'BWS',
        start_url: '/',
        background_color: '#141414',
        theme_color: '#2B6CB0',
        display: 'standalone',
        icon: 'src/images/cat_icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/']
      }
    },
    `gatsby-plugin-react-helmet`,
  ],
}
