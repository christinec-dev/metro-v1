import React from 'react';
import App from './App';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Careers from './components/careers/careers';
import Position from './components/careers/position';
import './index.css';
import './responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-on-scroll-animation/build/index.css";
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from './components/global/404';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="careers" element={<Careers />} />
      <Route path="contact" element={<Contact />} />      
      <Route path="position" element={<Position />} />
      <Route path="404" element={<DefaultPage />} />
    </Routes>
</BrowserRouter>,
  rootElement
);