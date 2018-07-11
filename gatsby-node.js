exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /material-design-lite/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};
