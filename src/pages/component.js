import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Heading, Markdown, SubHeading, Text } from 'circuit-ui';

const ComponentPage = ({ data: { componentMetadata } }) => {
  const componentData = componentMetadata.edges[0].node;

  return (
    <div>
      <Link to="/">← Home</Link>
      <Heading element="h1" size={Heading.ZETTA}>
        {componentData.displayName}
      </Heading>
      <Text size="giga">
        {componentData.description && componentData.description.text}
      </Text>
      <Heading element="h3" size={Heading.MEGA}>
        Props
      </Heading>
      <table>
        <tr>
          <th>
            <SubHeading size="mega">Name</SubHeading>
          </th>
          <th>
            <SubHeading size="mega">Description</SubHeading>
          </th>
          <th>
            <SubHeading size="mega">Required</SubHeading>
          </th>
          <th>
            <SubHeading size="mega">Type</SubHeading>
          </th>
          <th>
            <SubHeading size="mega">Options</SubHeading>
          </th>
          <th>
            <SubHeading size="mega">Default</SubHeading>
          </th>
        </tr>
        {componentData.props.map((prop, i) => {
          const { name, description, required, type, defaultValue } = prop;
          return (
            <tr {...{ key: i }}>
              <td>
                <Text>{name}</Text>
              </td>
              <td>
                <Text>{description && description.text}</Text>
              </td>
              <td>
                <Text>{required ? 'yes' : 'no'}</Text>
              </td>
              <td>
                <Text>{type.name}</Text>
              </td>
              <td>
                <Text>
                  {type.value &&
                    type.value.map &&
                    type.value.map(v => v.value).join(', ')}
                </Text>
              </td>
              <td>
                <Text>{defaultValue && defaultValue.value}</Text>
              </td>
            </tr>
          );
        })}
      </table>
      <Markdown>Hello</Markdown>
    </div>
  );
};

ComponentPage.propTypes = {
  data: PropTypes.shape({ componentsMetadata: PropTypes.object }).isRequired
};

export default ComponentPage;

export const pageQuery = graphql`
  query ComponentQuery($id: String) {
    componentMetadata: allComponentMetadata(filter: { id: { eq: $id } }) {
      edges {
        node {
          displayName
          description {
            text
          }
          props {
            name
            description {
              text
            }
            required
            type {
              value
              name
            }
            defaultValue {
              value
            }
          }
        }
      }
    }
  }
`;
