//built in Link from next
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.resumeDiv}>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://docs.google.com/document/d/1Rcy-B2kJyKtn3WOndPZOoZqlvF5C_EtQ0FPb7bBI0jg/edit?usp=sharing"
        >
          <button className={styles.resumeButton}>Resume</button>
        </a>
      </div>
      <div className={styles.centerDiv}>
        <a href="#">
          <button className={styles.centerDivText}>About</button>
        </a>
        <a href="#featured-projects">
          <button className={styles.centerDivText}>Work</button>
        </a>
        <a href="#contact-me">
          <button className={styles.centerDivText}>Contact</button>
        </a>
      </div>
      <div className={styles.linksDiv}>
        <a
          className={styles.githubButton}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Jamelscott"
        >
          <Image
            height="25px"
            src="/small_icons/small-github.png"
            alt="github Icon"
            width="25px"
          />
        </a>
        <a
          className={styles.githubButton}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jamelfadel/"
        >
          <Image
            height="25px"
            src="/small_icons/small-linkedin.png"
            alt="github Icon"
            width="25px"
          />
        </a>
        <a
          className={styles.githubButton}
          href="mailto: itsjamelscott@gmail.com"
        >
          <Image
            height="25px"
            src="/small_icons/small-mail.png"
            alt="github Icon"
            width="25px"
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
