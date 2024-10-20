// src/App.jsx
import React from 'react';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import ContactForm from './Components/contact';
import AboutUs from './Components/aboutus';
import HeroSection from './Components/hero';
import './App.css';  // Import global styles

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Render the Navbar */}
      <HeroSection/>
      <AboutUs/>
      <ContactForm />
      <Footer />  {/* Render the Footer */}
    </div>
  );
}

export default App;
