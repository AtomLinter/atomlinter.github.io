import * as React from "react";
import Consumers from "../components/consumers";
import Footer from "../components/footer";
import Head from "../components/head";
import Header from "../components/header";
import Nav from "../components/nav";
import Providers from "../components/providers";

const Index = () => (
  <>
    <Head />
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <Nav />
      <main className="mdl-layout__content">
        <div className="page-content">
          <Header />
          <Consumers />
          <Providers />
          <Footer />
        </div>
      </main>
    </div>
  </>
);

export default Index;
