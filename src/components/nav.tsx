import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "@emotion/styled";

const NavbarContainer = styled.header`
  background: #66595c;
`;

const Link = styled.a`
  :hover {
    background-color: #81c08b;
  }
`;

const Nav = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      allProvidersYaml {
        edges {
          node {
            id
            title
            modal
          }
        }
      }
    }
  `);

  return (
    <>
      <NavbarContainer className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          {/*  Title */}
          <span className="mdl-layout-title">AtomLinter</span>
          {/*  Add spacer, to align navigation to the right */}
          <div className="mdl-layout-spacer" />
          {/*  Navigation. We hide it in small screens. */}
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <Link
              className="mdl-navigation__link"
              href="//github.com/AtomLinter/atomlinter.github.io#adding-a-linter-provider"
            >
              Add your Linter
            </Link>
            <Link
              className="mdl-navigation__link"
              href="//atom.io/packages/linter"
            >
              Atom Package Manager
            </Link>
            <Link
              className="mdl-navigation__link"
              href="//atom-slack.herokuapp.com/"
            >
              Slack
            </Link>
            <Link
              className="mdl-navigation__link"
              href="//github.com/AtomLinter/Linter"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </NavbarContainer>
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">AtomLinter</span>
        <nav className="mdl-navigation">
          {data.allProvidersYaml.edges.map(({ node }: any) => (
            <a
              key={node.id}
              className="mdl-navigation__link"
              href={`#${node.modal}`}
            >
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
  );
};

export default Nav;
