module.exports = {
  pathPrefix: `/circuit-docs`,
  siteMetadata: {
    title: 'Circuit UI — Documentation',
    description: "Documentation for Circuit UI, SumUp's design system library"
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',

    // Configuration for loading markdown data from content folder
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/content`
      }
    },

    // Configuration for loading component metadata from Circuit UI library.
    'gatsby-transformer-documentationjs',
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
