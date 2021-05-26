import React from "react";
import Quotation from "./organisms/Quotation/Quotation";
import About from "./organisms/about/About";
import Contact from "./organisms/contact/molecules/Contact";
import Footer from "./component/footer/Footer";

import "./App.module.css";
import PersistentDrawerRight from "./component/Header/Header2";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <PersistentDrawerRight />
      <Quotation />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
