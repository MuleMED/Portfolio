import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './assets/templates/nav'
import Contact from './assets/templates/contat'
import About from './assets/templates/about'
import Home from './assets/templates/home'
import Service from './assets/templates/service'
import Works from './assets/templates/works'


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/works" element={<Works/>} /> 
        <Route path="/services" element={< Service/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
