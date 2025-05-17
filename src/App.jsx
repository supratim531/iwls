import React, { useState, useEffect } from "react";
import AOS from "aos";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { RootProvider } from "./contexts/rootContext";

import { Header, Footer, ScrollToTop } from "./components";

import "aos/dist/aos.css";
import { preloader, PreloaderSmall, PreloaderLarge } from "./assets";

const Configurations = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 3s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 50,
      mirror: false,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return loading ? (
    <div className="flex h-screen items-center justify-center bg-white">
      <img
        className="w-72"
        src={PreloaderSmall}
        alt="Innerwork Legal Service"
      />
    </div>
  ) : (
    <RootProvider value={{}}>{children}</RootProvider>
  );
};

export const App = (props) => {
  return (
    <Configurations>
      <HelmetProvider>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </HelmetProvider>
    </Configurations>
  );
};
