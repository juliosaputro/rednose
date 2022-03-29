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
import Annual2017 from "./pages/Annual2017";
import Annual2016 from "./pages/Annual2016";
import Annual2018 from "./pages/Annual2018";
import Annual2019 from "./pages/Annual2019";
import Healthy from "./pages/Healthy";
import Creative from "./pages/Creative";
import Scholarship from "./pages/Scholarship";
import Job from "./pages/Job";
import Mini from "./pages/Mini";
import International from "./pages/International";
import Focus from "./pages/Focus";
import Family from "./pages/Family";
import Teachers from "./pages/Teachers";
import Covid from "./pages/Covid";
import Trauma from "./pages/Trauma";
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
          <Route path='/2016' element={<Annual2016 />} />
          <Route path='/2017' element={<Annual2017 />} />
          <Route path='/2018' element={<Annual2018 />} />
          <Route path='/2019' element={<Annual2019 />} />
          <Route path='/CLP' element={<Creative />} />
          <Route path='/HLP' element={<Healthy />} />
          <Route path='/SP' element={<Scholarship />} />
          <Route path='/JRVT' element={<Job />} />
          <Route path='/MET' element={<Mini />} />
          <Route path='/IPT' element={<International />} />
          <Route path='/FGDS' element={<Focus />} />
          <Route path='/FFA' element={<Family />} />
          <Route path='/TT' element={<Teachers />} />
          <Route path='/HKD' element={<Covid />} />
          <Route path='/THTSC' element={<Trauma />} />
        </Routes>
        <Footer />
      </Router>
  );
}
