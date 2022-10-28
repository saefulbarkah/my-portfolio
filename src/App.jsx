import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Skiils from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layouts from "./components/Layouts";

const App = () => {
  return (
    <>
      <Layouts>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/skiils" element={<Skiils />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Layouts>
    </>
  );
};

export default App;
