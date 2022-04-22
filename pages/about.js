//import service side rendering to cache image tags
import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function About() {
  return (
      <div className={styles.container}>
        <div className={styles.aboutLeft}>
        <Image className='waveEmoji' src="/Emoji.png" alt="waving hand emoji" width="40" height="40"/>
          <h1 className={styles.aboutTextSmall}>Hello, Im Jamel.</h1>
          <h1 className={styles.aboutTextBig}>Front-End</h1>
          <h1 className={styles.aboutTextBig}>Web Developer</h1>
          <h1 className={styles.aboutTextSmall}>based in Vancouver, BC.</h1>
        </div>
        <div className={styles.aboutRight}>
          <Image
          className={styles.image}
          alt="a photo of jamel with graphics"
          src="/group-11.png"
          width="375px"
          height="375px"
          />
        </div>
      </div>
  );
}
