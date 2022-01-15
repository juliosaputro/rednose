import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavMenu from "./components/NavMenu";
import About from "./pages/About";
import Pillars from "./pages/Pillars";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import Reports from "./pages/Reports";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Education from "./pages/Education";


export default function App() {
  return (
      <Router>
        <NavMenu />
        <ScrollTop />
        <Routes>
          <Route exact path='/' element={<About />} />
          <Route path='/Pillars' element={<Pillars />} />
          <Route path='/Reports' element={<Reports />} />
          <Route path='/Media' element={<Media />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Detail' element={<Education />} />
        </Routes>
        <Footer />
      </Router>
  );
}
