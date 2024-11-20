import { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState("recent");
  const [activeCard, setActiveCard] = useState(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleCardClick = (id) => {
    setActiveCard(id === activeCard ? null : id);
  };

  return (
    <div className="alerts-container">
      <h1 className="alert-header">Disaster Alerts</h1>

      {/* Alert Categories */}
      <div className="alert-categories">
        <h2>Alert Categories</h2>
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {activeTab === "recent" && <p>Recent Alerts content...</p>}
          {activeTab === "ongoing" && <p>Ongoing Disasters content...</p>}
          {activeTab === "past" && <p>Past Alerts content...</p>}
        </div>
      </div>

      {/* Alert Cards */}
      <div className="alert-highlights">
        <h2>Alert Highlights</h2>

        {/* Container for the first three cards */}
        <div className="alerts-grid">
          {alerts.slice(0, 3).map((alert) => (
            <AlertCard
              key={alert.id}
              {...alert}
              isActive={activeCard === alert.id}
              onClick={handleCardClick}
            />
          ))}
        </div>

        {/* Container for the next three cards */}
        <div className="alerts-grid">
          {alerts.slice(3, 6).map((alert) => (
            <AlertCard
              key={alert.id}
              {...alert}
              isActive={activeCard === alert.id}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
<br />
      {/* Weather Map of Kenya */}
      <div className="map-view">
        <h2>Weather Map of Kenya</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726802.563698665!2d36.81724423978614!3d-1.286389723720841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840139fc5f3f7e3%3A0xe4f79f9d9db3d6da!2sKenya!5e0!3m2!1sen!2ske!4v1696369902995!5m2!1sen!2ske"
          width="100%"
          height="600"
          style={{ border: "none", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

const AlertCard = ({
  id,
  icon,
  title,
  severity,
  area,
  time,
  color,
  isActive,
  onClick,
}) => (
  <div className={`alert-card ${color}`}>
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>
      <strong>Severity:</strong> {severity}
    </p>
    <p>
      <strong>Affected Area:</strong> {area}
    </p>
    <p>
      <strong>Time:</strong> {time}
    </p>
    <button className="details-btn" onClick={() => onClick(id)}>
      {isActive ? "Hide Details" : "More Details"}
    </button>
    {isActive && (
      <div className="additional-details">
        <p>
          <strong>Alert ID:</strong> {Math.floor(Math.random() * 1000)}
        </p>
        <p>
          <strong>Additional Information:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus amet delectus corporis non sit modi quisquam sint sunt est molestias.
        </p>
      </div>
    )}
  </div>
);

const alerts = [
  {
    id: "1",
    icon: "🔥",
    title: "Wildfire",
    severity: "Critical",
    area: "Tsavo National Park",
    time: "12:30 PM",
    color: "critical",
  },
  {
    id: "2",
    icon: "🌊",
    title: "Flood",
    severity: "Moderate",
    area: "Budalangi",
    time: "11:00 AM",
    color: "moderate",
  },
  {
    id: "3",
    icon: "🌍",
    title: "Earthquake",
    severity: "Low",
    area: "Naivasha",
    time: "9:00 AM",
    color: "low",
  },
  {
    id: "4",
    icon: "🌪️",
    title: "Heavy Wind",
    severity: "High",
    area: "Nakuru",
    time: "2:00 PM",
    color: "high",
  },
  {
    id: "5",
    icon: "🌧️",
    title: "Heavy Rain",
    severity: "Moderate",
    area: "Kisumu",
    time: "3:30 PM",
    color: "moderate",
  },
  {
    id: "6",
    icon: "⚡",
    title: "Lightning Storm",
    severity: "Low",
    area: "Mombasa",
    time: "5:00 PM",
    color: "low",
  },
];

const tabs = [
  { id: "recent", label: "Recent Alerts" },
  { id: "ongoing", label: "Ongoing Disasters" },
  { id: "past", label: "Past Alerts" },
];

export default App;
