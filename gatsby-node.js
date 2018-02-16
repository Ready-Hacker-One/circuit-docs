const path = require('path');

exports.modifyWebpackConfig = ({ config, stage }, options) => {
  config.loader('js', current => {
    current.exclude = [/node_modules(?!\/circuit-ui)/];
    return current;
  });
  return config;
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  if (node.internal.type === 'MarkdownRemark') {
    if (node.frontmatter && node.frontmatter.title)
      return console.log('mdcontent: ', node);

    console.log('node: ', node);
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const componentPage = path.resolve('src/pages/component.js');
  graphql(
    `
      {
        allComponentMetadata {
          edges {
            node {
              id
              displayName
            }
          }
        }
      }
    `
  ).then(({ data, errors }) => {
    if (errors) {
      console.error(errors); // eslint-disable-line no-console
    }

    const { allComponentMetadata } = data;
    const componentsNames = allComponentMetadata.edges.map(c => ({
      id: c.node.id,
      name: c.node.displayName
    }));

    componentsNames.forEach(({ name, id }) => {
      if (!name || !id) {
        console.log(name, id);
      }
      createPage({
        path: `components/${name}`,
        component: componentPage,
        context: { id, name }
      });
    });
  });
};
