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
          href="https://docs.google.com/document/d/19MwImIB9izuaz17Qdk7iSR5Hz_AvMy7XFyiYc4s8SO8/edit?usp=sharing"
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
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Jamelscott"
        >
          <Image
            height="25px"
            className={styles.githubButton}
            src="/small_icons/small-github.png"
            alt="github Icon"
            width="25px"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jamelfadel/"
        >
          <Image
            height="25px"
            className={styles.githubButton}
            src="/small_icons/small-linkedin.png"
            alt="github Icon"
            width="25px"
          />
        </a>
        <a href="mailto: itsjamelscott@gmail.com">
          <Image
            height="25px"
            className={styles.githubButton}
            src="/small_icons/small-mail.png"
            alt="github Icon"
            width="25px"
          />
        </a>
      </div>
      {/* <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link> */}
    </nav>
  );
}

export default Navbar;
