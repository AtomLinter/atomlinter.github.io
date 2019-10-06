import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div className="header content-grid mdl-grid">
      <img
        className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"
        src={logo}
        alt=""
        width="200"
        height="200"
      />
      <h1 className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
        {data.site.siteMetadata.title}
      </h1>
      <h3 className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
        {data.site.siteMetadata.description}
      </h3>
    </div>
  );
};

export default Header;
