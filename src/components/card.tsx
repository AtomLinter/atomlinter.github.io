import * as React from "react";
import {
  Card as Base,
  CardContent,
  CardActions,
  Button,
  Grid,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface Link {
  name: string;
  url: string;
}

interface Props {
  title: string;
  subtitle?: string;
  links: Link[];
}

const useStyles = makeStyles({
  gridItem: {
    margin: "1em"
  },
  cardBase: {
    minWidth: "20em",
    height: "100%"
  }
});

export const Card = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.gridItem}>
      <Base className={classes.cardBase}>
        <CardContent>
          <h2>{props.title}</h2>
          {Boolean(props.subtitle) && <div>{props.subtitle}</div>}
        </CardContent>
        <Divider />
        <CardActions>
          <Grid container direction="column" wrap="nowrap">
            {props.links.map(link => (
              <Button href={link.url}>{link.name}</Button>
            ))}
          </Grid>
        </CardActions>
      </Base>
    </Grid>
  );
};
