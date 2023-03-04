import { About, Footer, Hero, MoreDetails, Navbar } from "@/components";
import CustomTitle from "@/utils/customTitle";
import React from "react";

function HomePage() {
  return (
    <>
      <CustomTitle title="Home" />
      <Navbar />
      <Hero />
      <About />
      <MoreDetails />
      <Footer />
    </>
  );
}

export default HomePage;
