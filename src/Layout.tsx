import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Layout;
