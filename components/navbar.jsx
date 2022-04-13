//built in Link from next
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.resumeDiv}>
        <button className={styles.resumeButton}>Resume</button>
      </div>
      <div className={styles.centerDiv}>
          <button className={styles.centerDivText}>About</button>
          <button className={styles.centerDivText}>Work</button>
          <button className={styles.centerDivText}>Contact</button>
      </div>
      <div className={styles.linksDiv}>
        {/* <img
        className={styles.githubButton}
          src="/small_icons/small-github.png"
          alt="github Icon"
          width="25px"
        />
        <img
          className={styles.githubButton}
          src="/small_icons/small-linkedin.png"
          alt="github Icon"
          width="25px"
        />
        <img 
        className={styles.githubButton}
        src="/small_icons/small-mail.png" 
        alt="github Icon" 
        width="25px" /> */}
      </div>
      {/* <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link> */}
    </nav>
  );
}

export default Navbar;
