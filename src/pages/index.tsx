import * as React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "typeface-roboto";
import Consumers from "../components/consumers";
import Footer from "../components/footer";
import Head from "../components/head";
import Header from "../components/header";
import Nav from "../components/nav";
import Providers from "../components/providers";

const useStyles = makeStyles({
  content: {
    padding: "1em"
  }
});

const Index = () => {
  const classes = useStyles();

  return (
    <>
      <Head />
      <CssBaseline />
      <Nav />
      <Header />
      <Container component="main" className={classes.content}>
        <Consumers />
        <Providers />
      </Container>
      <Footer />
    </>
  );
};

export default Index;
