import styles from "./Footer.module.scss";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.info}>Developed by: <span className={styles.myName}>Hassan Faruq</span></p>
      <p>
        <sup>&#169; </sup>
        {currentYear} 
      </p>
      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/hassan-faruq-4a2858311/"
          title="Author LinkedIn account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      
       
      </div>
    </footer>
  );
}

export default Footer;
