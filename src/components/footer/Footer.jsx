import styles from "./Footer.module.scss";


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.info}>
        Developed by: <span className={styles.myName}>Hassan Faruq </span>
      </p> 
      
      <p className={styles.info}>
        Designed by: <span className={styles.designers}>Byron and Christine</span>
      </p>
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
         
        </a>
      </div>
    </footer>
  );
}

export default Footer;
