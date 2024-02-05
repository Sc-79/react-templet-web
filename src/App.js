import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import NavBar from "./components/NavBar";

import Charge from "./page/Charge";
import Store from "./page/Store";
import Product from "./page/Product";
import Story from "./page/Story";
import NotFound from "./page/NotFound";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/charge" element={<Charge />} />
          <Route path="/product" element={<Product />} />
          <Route path="/story" element={<Story />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
