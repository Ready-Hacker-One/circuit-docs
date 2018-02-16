import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';
import { standard } from 'circuit-ui/themes';
import { globalStyles } from 'circuit-ui/styles';

globalStyles({ theme: standard });

const Layout = ({ data: { site }, children }) => (
  <div>
    <Helmet>
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <ThemeProvider theme={standard}>
      <div style={{ width: '90vw', maxWidth: '1000px', margin: '50px auto' }}>
        {children()}
      </div>
    </ThemeProvider>
  </div>
);

Layout.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object
  }).isRequired,
  children: PropTypes.func.isRequired
};

export default Layout;

export const query = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
