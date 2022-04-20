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
          <a href="#"><button className={styles.centerDivText}>About</button></a>
          <a href="#featured-projects"><button className={styles.centerDivText}>Work</button></a>
          <a href="#contact-me"><button className={styles.centerDivText}>Contact</button></a>
      </div>
      <div className={styles.linksDiv}>
      <a target="_blank" href="https://github.com/Jamelscott">
        <img
        className={styles.githubButton}
          src="/small_icons/small-github.png"
          alt="github Icon"
          width="25px"
        />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/jamelfadel/">
        <img
          className={styles.githubButton}
          src="/small_icons/small-linkedin.png"
          alt="github Icon"
          width="25px"
        />
        </a>
        <a href="mailto: itsjamelscott@gmail.com">
        <img 
        className={styles.githubButton}
        src="/small_icons/small-mail.png" 
        alt="github Icon" 
        width="25px" />
        </a>
      </div>
      {/* <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link> */}
    </nav>
  );
}

export default Navbar;
