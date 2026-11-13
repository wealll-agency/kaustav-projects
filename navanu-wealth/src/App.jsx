import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import HomeComponent from './components/HomeComponent/HomeComponent'
import Footer from './components/Footer'
import AboutComponent from './components/AboutComponent/AboutComponent';
import MutualFund from './components/ProductsComponent/MutualFund';
import SipCalculator from './components/ToolsComponent/SipCalculator';
import ContactComponent from './components/ContactComponent/ContactComponent';
import Disclaimer from './components/MoreComponent/Disclaimer';
import Articles from './components/MoreComponent/Articles';
import ArticleDetails from './components/MoreComponent/ArticleDetails';
import Login from './components/LoginComponent/Login';

function App() {

  return (
    <>
     
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/mutual-fund" element={<MutualFund/>} />
          <Route path="/sip-calculator" element={<SipCalculator/>} />
          <Route path="/contact" element={<ContactComponent/>} />
          <Route path="/disclaimer" element={<Disclaimer/>} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/article-details" element={<ArticleDetails/>} />
          <Route path="/login" element={<Login/>} />
          
        </Routes>
    </BrowserRouter>

     <Footer></Footer>
    </>
  )
}

export default App
