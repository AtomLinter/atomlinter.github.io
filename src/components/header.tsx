import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import logo from "../images/logo.svg";

// const Container = styled.div`
//   text-align: center;
//   color: #66595c;
//   background: #efeae1;
// `;

const useStyles = makeStyles({
  banner: {
    background: "#efeae1",
    textAlign: "center",
    padding: "2em"
  }
});

const Header = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query HeroQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Container className={classes.banner} maxWidth="xl">
      <img src={logo} width="225em" height="225em" />
      <Typography variant="h2">{data.site.siteMetadata.title}</Typography>
      <Typography variant="h4">{data.site.siteMetadata.description}</Typography>
    </Container>
  );
};

export default Header;
