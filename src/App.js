import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-light min-h-screen">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
