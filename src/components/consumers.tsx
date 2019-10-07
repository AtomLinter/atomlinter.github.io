import { graphql, useStaticQuery } from "gatsby";
import { sortBy } from "lodash";
import * as React from "react";
import { Grid } from "@material-ui/core";
import { Card } from "./card";

const Consumers = () => {
  const data = useStaticQuery(graphql`
    query ConsumersQuery {
      consumers: allConsumersYaml {
        edges {
          node {
            id
            author
            title
            url
            code
          }
        }
      }
    }
  `);

  return (
    <div id="consumers">
      <h2>Consumers</h2>
      <Grid container justify="space-evenly">
        {sortBy(data.consumers.edges, "node.title").map(({ node }: any) => (
          <Card
            title={node.title}
            subtitle={`Maintained by ${node.author}`}
            links={[
              { name: "Atom Package Manager", url: node.url },
              { name: "Source Code on GitHub", url: node.code }
            ]}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Consumers;
