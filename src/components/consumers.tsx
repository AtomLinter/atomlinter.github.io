import { graphql, StaticQuery } from "gatsby";
import { sortBy } from "lodash";
import * as React from "react";

const Consumers = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <div id="consumers">
        <h2>Consumers</h2>
        <div className="mdl-grid">
          {sortBy(data.consumers.edges, "node.title").map(({ node }: any) => (
            <div key={node.id} className="mdl-card mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-shadow--2dp">
              <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">{node.title}</h2>
              </div>
              <div className="mdl-card__supporting-text">
                Maintained by {node.author}
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a
                  className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                  href={node.url}
                >
                  Atom Package Manager
                </a>
                <a
                  className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                  href={node.code}
                >
                  Source Code on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  />
);

export default Consumers;
