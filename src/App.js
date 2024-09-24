// src/App.jsx
import React from 'react';
import Mainimage from './assests//Secure Privacy Enhanced.png';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import ContactForm from './Components/contact';
import AboutUs from './Components/aboutus';
import './App.css';  // Import global styles

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Render the Navbar */}
      <div className="main-image-container">
        <img src={Mainimage} alt="Secure Privacy Enhanced" className="main-image" />
      </div>
      <AboutUs/>
      <ContactForm />
      <Footer />  {/* Render the Footer */}
    </div>
  );
}

export default App;
