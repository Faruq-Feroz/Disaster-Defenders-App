import { useState } from "react";

const Report = () => {
  const [formData, setFormData] = useState({
    emergencyType: "",
    location: "",
    description: "",
    severity: "",
    time: "",
    phone: "",
    email: "",
    media: null,
    contact: "",
    consent: false,
  });
  const [confirmation, setConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      media: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setConfirmation(true);
    setTimeout(() => setConfirmation(false), 5000); // Hide confirmation after 5 seconds
    // You can add actual submission logic here (e.g., API call)
  };

  return (
    <div className="report-container">
      {/* Report Form */}
      <h1 style={{textAlign:"center", fontSize:26}}>Report an Emergency</h1>
      <p style={{textAlign:"center"}}>Provide the details below to help us respond quickly to the emergency.</p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-column">
          <label>
            Type of Emergency:
            <select
              name="emergencyType"
              value={formData.emergencyType}
              onChange={handleChange}
              required
            >
              <option value="">Select Emergency Type</option>
              <option value="fire">Fire</option>
              <option value="flood">Flood</option>
              <option value="earthquake">Earthquake</option>
              <option value="medical">Medical</option>
              <option value="accident">Traffic Accident</option>
            </select>
          </label>

          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location or drop a pin"
              required
            />
          </label>

          <label>
            Description of the Emergency:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the situation..."
              required
            ></textarea>
          </label>

          <label>
            Time of Incident:
            <input
              type="datetime-local"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </label>
        </div>

        <div className="form-column">
          <label>
            Severity Level:
            <input
              type="radio"
              name="severity"
              value="Low"
              onChange={handleChange}
              checked={formData.severity === "Low"}
            /> Low
            <input
              type="radio"
              name="severity"
              value="Medium"
              onChange={handleChange}
              checked={formData.severity === "Medium"}
            /> Medium
            <input
              type="radio"
              name="severity"
              value="High"
              onChange={handleChange}
              checked={formData.severity === "High"}
            /> High
            <input
              type="radio"
              name="severity"
              value="Critical"
              onChange={handleChange}
              checked={formData.severity === "Critical"}
            /> Critical
          </label>

          <label>
            Email (optional):
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </label>

          <label>
            Attach images or videos (optional):
            <input
              type="file"
              name="media"
              onChange={handleFileChange}
              accept="image/*,video/*"
            />
          </label>

          <label>
            Emergency Contact (optional):
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Provide additional contact details"
            />
          </label>

          <label className="lab">
          <p>I consent to my data being used for emergency response purposes.</p>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={() =>
                setFormData({ ...formData, consent: !formData.consent })
              }
              required
            />
            
            
          </label> <br />

          <button type="submit">Submit Report</button>
        </div>
      </form>

      {/* Confirmation Alert */}
      {confirmation && (
        <div className="confirmation-message">
          <p>Thank you for reporting the emergency. We are reviewing your report.</p>
        </div>
      )}


      <br /><br />


      {/* Contact Information for Immediate Help */}
      <section className="emergency-contacts">
        <h2>Immediate Help</h2>
        <p>If this is a critical emergency, please call:</p>
        <ul>
        <li>Fire Department: 999</li>
<li>Ambulance: 999</li>
<li>Police: 999</li>
<li>Kenya Red Cross: 1199</li>
<li>National Disaster Management Unit: 020-2724172</li>
<li>St. John Ambulance: +254 20 2210000</li>

        </ul>
        <p>For less urgent issues, email: <a href="mailto:help@emergencyresponse.com">help@disasterdefenders.com</a></p>
      </section>
     


 
      {/* Instructions for Users */}
      <section className="user-instructions">
        <h2>What Happens After You Submit?</h2>
        <p>
          After submitting this report, our emergency response team will be notified.
          Please ensure you stay available for follow-up. We aim to respond within 30 minutes.
        </p>
        <p>
          In case of critical emergencies, please call the numbers listed above immediately.
        </p>
      </section>
      
    </div>
  );
};

export default Report;
