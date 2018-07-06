import { graphql, StaticQuery } from "gatsby";
import * as React from "react";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <footer className="mdl-mini-footer">
        <div className="mdl-mini-footer__left-section">
          <div className="mdl-logo">{data.site.siteMetadata.title}</div>
        </div>
      </footer>
    )}
  />
);

export default Footer;
