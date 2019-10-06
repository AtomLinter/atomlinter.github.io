const siteMetadata = {
  title: "AtomLinter",
  url: "https://atomlinter.github.io",
  description: "Lint your code with ease in Atom.",
  color: {
    primary: "#efeae1",
    secondary: "#66595c",
    active: "#81c08b"
  },
  nav: [
    {
      name: "Add your Linter",
      url:
        "https://github.com/AtomLinter/atomlinter.github.io#adding-a-linter-provider"
    },
    {
      name: "Atom Package Manager",
      url: "https://atom.io/packages/linter"
    },
    {
      name: "Slack",
      url: "https://atom-slack.herokuapp.com/"
    },
    {
      name: "GitHub",
      url: "https://github.com/AtomLinter/Linter"
    }
  ]
};

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-lodash",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./_data/"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: "/",
        background_color: siteMetadata.color.secondary,
        theme_color: siteMetadata.color.primary,
        display: "minimal-ui",
        icon: "src/images/logo.svg" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline"
  ]
};
