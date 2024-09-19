// src/App.jsx
import React from 'react';

import Navbar from './Components/navbar';
import Footer from './Components/footer';
import ContactForm from './Components/contact';
import './App.css';  // Import global styles

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Render the Navbar */}
      
      <div className="content">
        {/* Main content */}
        <h1>Welcome to the Surveillance System</h1>
        {/* Add other pages, components, or routes */}

      </div>
      <ContactForm />
      <Footer />  {/* Render the Footer */}
    </div>
  );
}

export default App;
