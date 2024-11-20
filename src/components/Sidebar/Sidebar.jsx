import { useState } from "react";
import styles from "./Sidebar.module.scss";
import {
  FaBars,
  FaTimes,
  FaBell,
  FaShieldAlt,
  FaHandsHelping,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaBlog,
  FaVideo,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleSidebar}>
        {isSidebarVisible ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${
          isSidebarVisible ? styles.sidebarVisible : ""
        }`}
      >
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/disaster-alerts" className={styles.navLink}>
                <FaBell className={styles.icon} />
                Disaster Alerts
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/preparedness" className={styles.navLink}>
                <FaShieldAlt className={styles.icon} />
                Preparedness
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/response" className={styles.navLink}>
                <FaHandsHelping className={styles.icon} />
                Response and Recovery
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/report" className={styles.navLink}>
                <FaExclamationTriangle className={styles.icon} />
                Report an Emergency
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/map" className={styles.navLink}>
                <FaMapMarkerAlt className={styles.icon} />
                Map
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/get-involved" className={styles.navLink}>
                <FaHandsHelping className={styles.icon} />
                Get Involved
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/blog" className={styles.navLink}>
                <FaBlog className={styles.icon} />
                Blog
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/resources" className={styles.navLink}>
                <FaVideo className={styles.icon} />
                Resources
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/education" className={styles.navLink}>
                <FaBook className={styles.icon} />
                Education
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink}>
                <FaEnvelope className={styles.icon} />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
