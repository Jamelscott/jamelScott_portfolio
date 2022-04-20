//import service side rendering to cache image tags
import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function About() {
  return (
      <div className={styles.container}>
        <div className={styles.aboutLeft}>
        <Image className='waveEmoji' src="/Emoji.png" alt="waving hand emoji" width="40" height="40"/>
          <h1 className={styles.aboutText} style={{fontSize: "30px"}}>Hello, Im Jamel.</h1>
          <h1 className={styles.aboutText} style={{fontSize: "100px"}}>Front-End</h1>
          <h1 className={styles.aboutText} style={{fontSize: "100px"}}>Web Developer</h1>
          <h1 className={styles.aboutText} style={{fontSize: "30px"}}>based in Vancouver, BC.</h1>
        </div>
        <div className={styles.aboutRight}>
          <Image
          alt="a photo of jamel with graphics"
          src="/group-11.png"
          width="400px"
          height="400px"
          />
        </div>
      </div>
  );
}
