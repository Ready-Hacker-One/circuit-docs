module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-react-docgen',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'documents',
        path: `${__dirname}/node_modules/circuit-ui/src/components`,
      },
    },
  ],
};
