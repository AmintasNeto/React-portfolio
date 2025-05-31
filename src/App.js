import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualifications from './components/qualifications/Qualifications';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Work from './components/work/Work';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
    <Header/>
    <ToastContainer
      position='top-center'
    />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualifications />
      <Work />
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  );
}

export default App;
