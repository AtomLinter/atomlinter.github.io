import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import logo from "../images/logo.svg";

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
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
    )}
  />
);

export default Header;
