import React from "react";
import Header from "./component/Header/Header";
import Quotation from "./template/Quotation/Quotation";
import About from "./template/about/About";

import "./App.module.css";

const App = () => {
  return (
    <div>
      <Header />
      <Quotation />
      <About />
    </div>
  );
};

export default App;
