import { graphql, useStaticQuery } from "gatsby";
import { sortBy } from "lodash";
import * as React from "react";
import { Grid } from "@material-ui/core";
import { Card } from "./card";

interface ProvidersQuery {
  providers: {
    edges: {
      node: {
        id: string;
        title: string;
        plural: string;
        modal: string;
        types: {
          title: string;
          modal: string;
          packages: {
            title: string;
            url: string;
          }[];
        }[];
      };
    }[];
  };
}

const Providers = () => {
  const data = useStaticQuery<ProvidersQuery>(graphql`
    query ProvidersQuery {
      providers: allProvidersYaml {
        edges {
          node {
            id
            title
            plural
            modal
            types {
              title
              modal
              packages {
                title
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.providers.edges.map(({ node: scope }) => (
        <div key={scope.id} id={scope.modal}>
          <h2>{scope.title}</h2>
          <Grid container justify="space-evenly">
            {sortBy(scope.types, "title").map(type => (
              <Card
                title={type.title}
                links={type.packages.map(pkg => ({
                  name: pkg.title,
                  url: pkg.url
                }))}
              />
            ))}
          </Grid>
        </div>
      ))}
    </>
  );
};

export default Providers;
