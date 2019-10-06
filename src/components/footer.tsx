import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <footer className="mdl-mini-footer">
      <div className="mdl-mini-footer__left-section">
        <div className="mdl-logo">{data.site.siteMetadata.title}</div>
      </div>
    </footer>
  );
};

export default Footer;
