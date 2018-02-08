exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  if (node.internal.type === "MarkdownRemark") {
    if (node.frontmatter && node.frontmatter.title)
      return console.log('mdcontent: ', node);

    console.log('node: ', node);
  }
};

exports.createPages = ({graphql, boundActionCreators}) => {
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
        {
          allComponentProp {
            edges {
              node {
                id
              }
            }
          }
        }
      `
      ).then(result => {
        console.log(result);

        if (result.errors) {
          /* eslint no-console: "off"*/
          console.log(result.errors);
          reject(result.errors);
        }
      })
    );
  });
};
