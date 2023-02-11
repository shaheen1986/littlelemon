import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import Sec_one from "./components/Sec_one";
import Sec_two from "./components/Sec_two";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Sec_one></Sec_one>
      <Sec_two></Sec_two>
      <Products></Products>
    </>
  );
};

export default App;
