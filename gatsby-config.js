const siteMetadata = {
  title: "AtomLinter",
  siteUrl: "https://atomlinter.github.io",
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
    "gatsby-theme-atom-service",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: "/",
        background_color: siteMetadata.color.secondary,
        theme_color: siteMetadata.color.primary,
        display: "minimal-ui",
        icon: "content/assets/logo.svg"
      }
    },
    "gatsby-plugin-offline"
  ]
};
