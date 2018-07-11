import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

const Head = () => (
  <StaticQuery
    query={graphql`
      query HeadQuery {
        site {
          siteMetadata {
            title
            description
            url
            color {
              primary
              secondary
              active
            }
          }
        }
      }
    `}
    render={data => (
      <Helmet defaultTitle={data.site.siteMetadata.title}>
        <meta name="description" content={data.site.siteMetadata.description} />
        <link rel="canonical" href={data.site.siteMetadata.url} />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
    )}
  />
);

export default Head;
