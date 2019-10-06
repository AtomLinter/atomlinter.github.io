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

interface NavQuery {
  site: {
    siteMetadata: {
      nav: {
        name: string;
        url: string;
      }[];
    };
  };
  allProvidersYaml: {
    edges: {
      node: {
        id: string;
        title: string;
        modal: string;
      };
    }[];
  };
}

const Nav = () => {
  const data = useStaticQuery<NavQuery>(graphql`
    query NavQuery {
      site {
        siteMetadata {
          nav {
            name
            url
          }
        }
      }
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
            {data.site.siteMetadata.nav.map(link => (
              <Link className="mdl-navigation__link" href={link.url}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </NavbarContainer>
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">AtomLinter</span>
        <nav className="mdl-navigation">
          {data.allProvidersYaml.edges.map(({ node }) => (
            <a
              key={node.id}
              className="mdl-navigation__link"
              href={`#${node.modal}`}
            >
              {node.title}
            </a>
          ))}
          {data.site.siteMetadata.nav.map(link => (
            <a className="mdl-navigation__link" href={link.url}>
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Nav;
