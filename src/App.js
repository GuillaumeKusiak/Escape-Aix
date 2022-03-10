import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Scenarios from "./pages/Scenarios";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles/index.scss"

const App = () => {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>

          <Routes>

              <Route path="/" element={<Home/>} /> {/* Link for home page */}
              <Route path="/nos-scenarios" element={<Scenarios/>} /> {/* Link for scenarios page */}
              <Route path="/a-propos" element={<About/>} /> {/* Link for about page */}
              <Route path="/contact" element={<Contact/>} /> {/* Link for contact page */}

          </Routes>

      </BrowserRouter>
  );
};

export default App;
