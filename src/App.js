import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./MyComp/Layout";
import Home from "./MyComp/Home";
import About from "./MyComp/About";
import Records from "./MyComp/Records";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="records" element={<Records />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
