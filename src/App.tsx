import React from "react";
import Header from "./component/Header/Header";
import Quotation from "./organisms/Quotation/Quotation";
import About from "./organisms/about/About";
import Contact from "./organisms/contact/molecules/Contact";

import "./App.module.css";

const App = () => {
  return (
    <div>
      <Header />
      <Quotation />
      <About />
      <Contact />
    </div>
  );
};

export default App;
