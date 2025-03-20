import React from "react";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { RootProvider } from "./contexts/rootContext";

import { Header, Footer } from "./components";

const Configurations = (props) => {
  const { children } = props;
  return <RootProvider value={{}}>{children}</RootProvider>;
};

export const App = (props) => {
  return (
    <Configurations>
      <HelmetProvider>
        <Header />
        <Outlet />
        <Footer />
      </HelmetProvider>
    </Configurations>
  );
};
