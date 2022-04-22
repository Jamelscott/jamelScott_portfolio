import styles from '../styles/Footer.module.css';
function Footer() {
  return (
    <footer
      className={styles.container}
    >
      <div>
        <h5  className={styles.fullStackDev}>Full Stack Developer</h5>
      </div>
      <div>
        <h5>@ {new Date().getFullYear()} Jamel Ahmed Scott Fadel</h5>
      </div>
      <div className={styles.uiDesigner}>
        <h5>UI Designer</h5>
      </div>
    </footer>
  );
}

export default Footer;
