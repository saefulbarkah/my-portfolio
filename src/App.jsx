import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Skiils from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layouts from "./components/Layouts";
import BackgroundDecoration from "./components/BackgroundDecoration";
import Title from "./components/Title";

const App = () => {
  return (
    <>
      <Layouts>
        <BackgroundDecoration />
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/skills" element={<Skiils />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Layouts>
    </>
  );
};

export default App;
