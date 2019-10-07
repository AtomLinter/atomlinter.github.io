import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  footer: {
    padding: "3em",
    backgroundColor: "#424242",
    color: "white"
  }
});

const Footer = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Box component="footer" className={classes.footer}>
      <Typography>Copyright {data.site.siteMetadata.title}</Typography>
    </Box>
  );
};

export default Footer;
