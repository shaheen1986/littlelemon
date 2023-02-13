import React from "react";
import "./App.css";
import Highlightsection from "./components/Highlightsection";
import Herosection from "./components/Herosection";
import Highlight from "./components/Highlight";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Navigationbar></Navigationbar>
      <Herosection></Herosection>
      <Highlight></Highlight>
      <Highlightsection></Highlightsection>
      <Testimonials></Testimonials>
      <About></About>
      <Footer></Footer>
    </>
  );
};

export default App;
