import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

const Head = () => {
  const data = useStaticQuery(graphql`
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
  `);

  return (
    <Helmet defaultTitle={data.site.siteMetadata.title}>
      <html lang="en" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <link rel="canonical" href={data.site.siteMetadata.url} />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Helmet>
  );
};

export default Head;
