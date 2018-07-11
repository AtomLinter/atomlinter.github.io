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
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content={data.site.siteMetadata.description} />
        <link rel="canonical" href={data.site.siteMetadata.url} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
    )}
  />
);

export default Head;
