module.exports = {
  siteMetadata: {
    title: "AtomLinter",
    url: "https://atomlinter.github.io",
    description: "Lint your code with ease in Atom.",
    color: {
      primary: "#efeae1",
      secondary: "#66595c",
      active: "#81c08b"
    }
  },
  plugins: [
    "gatsby-plugin-lodash",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./_data/"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript"
  ]
};
