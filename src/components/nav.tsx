import { graphql, StaticQuery } from "gatsby";
import * as React from "react";

const Nav = () => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        allProvidersYaml {
          edges {
            node {
              title
              modal
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <header className="navbar mdl-layout__header">
          <div className="mdl-layout__header-row">
            {/*  Title */}
            <span className="mdl-layout-title">AtomLinter</span>
            {/*  Add spacer, to align navigation to the right */}
            <div className="mdl-layout-spacer" />
            {/*  Navigation. We hide it in small screens. */}
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a
                className="mdl-navigation__link"
                href="//github.com/AtomLinter/atomlinter.github.io#adding-a-linter-provider"
              >
                Add your Linter
              </a>
              <a
                className="mdl-navigation__link"
                href="//atom.io/packages/linter"
              >
                Atom Package Manager
              </a>
              <a
                className="mdl-navigation__link"
                href="//atom-slack.herokuapp.com/"
              >
                Slack
              </a>
              <a
                className="mdl-navigation__link"
                href="//github.com/AtomLinter/Linter"
              >
                GitHub
              </a>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">AtomLinter</span>
          <nav className="mdl-navigation">
            {data.allProvidersYaml.edges.map(({ node }: any) => (
              <a className="mdl-navigation__link" href={`#${node.modal}`}>
                {node.title}
              </a>
            ))}
            <a
              className="mdl-navigation__link"
              href="//github.com/AtomLinter/atomlinter.github.io#adding-a-linter-provider"
            >
              Add your Linter
            </a>
          </nav>
        </div>
      </>
    )}
  />
);

export default Nav;
