const GetInvolved = () => {
  return (
    <div className="get-involved-page">
      <h2 className="get-involved-title">Get Involved</h2>
      <p className="get-involved-description">
        Join us in making a difference! Whether through volunteering, donating, or partnering with us, there are many ways to get involved and support our mission.
      </p>

      <div className="involvement-container">
        {/* Volunteer Section */}
        <div className="involvement-section">
          <h3 className="section-title">Volunteer With Us</h3>
          <p className="section-description">
            Volunteers play a vital role in helping us achieve our mission. You can make a real difference by donating your time and skills.
          </p>
          <button className="involvement-button">Sign Up to Volunteer</button>
        </div>

        {/* Donate Section */}

        
        <div className="involvement-section">
          <h3 className="section-title">Donate</h3>
          <p className="section-description">
            Your donation helps fund our programs and initiatives. Every contribution, big or small, goes a long way in supporting vulnerable communities.
          </p>
          <button className="involvement-button">Donate Now</button>
        </div> 
        </div>
       

        {/* Partnership Section */}
        <div className="involvement-container2">
        <div className="involvement-section2">
          <h3 className="section-title">Partner with Us</h3>
          <p className="section-description">
            We believe in the power of collaboration. If you are a company, organization, or community group, consider partnering with us to create a lasting impact.
          </p>
          <button className="involvement-button">Become a Partner</button>
        </div>

        {/* Events Section */}
        <div className="involvement-section2"> 
          <h3 className="section-title">Attend Our Events</h3>
          <p className="section-description">
            Our events are a great way to meet like-minded individuals and learn more about our initiatives. Join us at one of our upcoming events.
          </p>
          <button className="involvement-button">View Upcoming Events</button>
        </div>
        </div>

      {/* Contact Information Section */}
      <div className="contact-info">
        <h3 className="contact-info-title">Contact Us</h3>
        <p className="contact-info-text">
          If you have any questions or would like to know more about how you can get involved, don’t hesitate to reach out.
        </p>
        <p className="contact-info-text">Email: disasterdefenders@gmail.com</p>
        <p className="contact-info-text">Phone: 0742186963</p>
      </div>
    </div>
  );
};

export default GetInvolved;
