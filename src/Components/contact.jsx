import React, { useState } from 'react';
import './contact.css'; 

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here (e.g., send data to a server)
  //   console.log(formData);
  // };

  return (
    <div className="contact-form-container" id='contact'>
      <h2 className="center events-title" style={{'fontWeight':'500'}}><b>Contact Us</b></h2>
      
      <form className="form" action="" method="POST">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
        />
        <div className="inline-fields">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="input-field"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="input-field"
        />
        <button type="submit" className="submit-button register">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;