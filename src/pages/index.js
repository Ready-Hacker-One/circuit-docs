import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Heading, List } from 'circuit-ui';

const IndexPage = ({ data: { componentsMetadata } }) => (
  <div>
    <Heading element="h1" size="zetta">
      Circuit UI Documentation
    </Heading>
    <Heading size="mega">Components</Heading>
    <List size="mega">
      {componentsMetadata.edges.map(component => (
        <li key={component.node.displayName}>
          <Link to={`/components/${component.node.displayName}`}>
            {component.node.displayName}
          </Link>
        </li>
      ))}
    </List>
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.shape({ componentsMetadata: PropTypes.object }).isRequired
};

export default IndexPage;

export const pageQuery = graphql`
  query AllComponents {
    componentsMetadata: allComponentMetadata {
      edges {
        node {
          displayName
        }
      }
    }
  }
`;
