import React,{useState} from 'react';
import './App.css';
import About from './components/About';
import BannerSection from './components/BannerSection';
import Contact from './components/Contact';
import Header from './components/Header';
import ResumeData from './components/ResumeData';

function App() {
  
  return (
   <>
   <Header/>
   <BannerSection/>
   <ResumeData/>
   <About/>
   <Contact/>
   </>
  );
}

export default App;
