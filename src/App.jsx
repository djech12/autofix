import React from "react";

import Navbar from "./components/Navbar";
import ThemeToggle from "./Theme/ThemeToggle";
import Home from "./components/Home";
import Services from "./components/Services";
import AboutServis from "./components/AboutServis";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* tady bude theme toggle vždy vidět */}
      <ThemeToggle />
      {/* příklad sekcí pro scroll */}
      <Home></Home>
      <Services></Services>
      <AboutServis></AboutServis>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;