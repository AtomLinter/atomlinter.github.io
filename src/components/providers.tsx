import { graphql, StaticQuery } from "gatsby";
import { sortBy } from "lodash";
import * as React from "react";

const Providers = () => (
  <StaticQuery
    query={graphql`
      query ProvidersQuery {
        providers: allProvidersYaml {
          edges {
            node {
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
    `}
    render={data => (
      <>
        {data.providers.edges.map(({ node: scope }: any) => (
          <div id={scope.modal}>
            <h2>{scope.title}</h2>
            <div className="mdl-grid">
              {sortBy(scope.types, "title").map((type: any) => (
                <div
                  className="mdl-card mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-shadow--2dp"
                  id={`${scope.modal}-${type.modal}`}
                >
                  <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{type.title}</h2>
                  </div>
                  {sortBy(type.packages, "title").map((pkg: any) => (
                    <div className="mdl-card__actions mdl-card--border">
                      <a
                        className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                        href={pkg.url}
                      >
                        {pkg.title}
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    )}
  />
);

export default Providers;
