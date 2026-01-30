import React from "react";

import Navbar from "./components/Navbar";
import ThemeToggle from "./Theme/ThemeToggle";
import Home from "./components/Home";
import Services from "./components/Services";
import AboutServis from "./components/AboutServis";
import Prices from "./components/Team";
import Contact from "./components/Contact";

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
      <section id="pricing" className="h-screen bg-gray-400">Ceník</section>
      <section id="contact" className="h-screen bg-gray-500">Kontakt</section>
    </div>
  );
};

export default App;