module.exports = {
  pathPrefix: `/circuit-docs`,
  siteMetadata: {
    title: 'Circuit UI — Documentation'
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',

    //  Configurations for loading markdown data from
    //  content folder
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/content`
      }
    },

    // Configuration to loading component metadata from Circuit-ui
    // library.
    'gatsby-transformer-react-docgen',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'components',
        path: `${__dirname}/node_modules/circuit-ui/src/components`
      }
    }
  ]
};
