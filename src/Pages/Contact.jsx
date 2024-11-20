

import  { useState } from 'react';


const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: '',
    emailAddress: '',
    userMessage: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted', contactData);
  };

  return (
    <div className="contact-page">
      <h2 className="contact-page-title">Contact Us</h2>

     
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={contactData.fullName}
              onChange={handleInputChange}
              className="contact-form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="emailAddress" className="form-label">Email Address</label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={contactData.emailAddress}
              onChange={handleInputChange}
              className="contact-form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="userMessage" className="form-label">Message</label>
            <textarea
              id="userMessage"
              name="userMessage"
              value={contactData.userMessage}
              onChange={handleInputChange}
              className="contact-form-textarea"
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-form-submit-button">Send Message</button>
        </form>
      </div>

     
      <div className="contact-info">
        <h3 className="contact-info-title">Our Contact Information</h3>
        <p className="contact-info-text">Phone: 0742186963</p>
        <p className="contact-info-text">Email: disasterdefenders@gmail.com</p>
        <p className="contact-info-text">Address:  Nairobi, Kenya</p>
      </div>

    
    </div>
  );
};

export default Contact;
