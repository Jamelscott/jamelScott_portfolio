//import service side rendering to cache image tags
import Image from 'next/image';
import styles from '../styles/About.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  }); // inView = boolean (in view or not) // ref = reference to element
  const animation1 = useAnimation(); // initiate useAnimation hook
  // const animation2 = useAnimation() // initiate useAnimation hook

  const animation = {
    start: {
      x: -500,
      transition: {
        type: 'spring',
        duration: 2,
        bounce: 0.2,
      },
    },
    end: {
      x: 0,
      transition: {
        type: 'spring',
        duration: 2,
        bounce: 0.2,
      },
    },
  };

  const apost = "'";

  return (
    <div ref={ref} className={styles.container}>
      <motion.div initial="start" animate="end" variants={animation}>
        <Image
          className="waveEmoji"
          src="/Emoji.png"
          alt="waving hand emoji"
          width="40"
          height="40"
        />
        <h1 className={styles.aboutTextSmall}>Hello, I{apost}m Jamel.</h1>
        <h1 className={styles.aboutTextBig}>Full-Stack</h1>
        <h1 className={styles.aboutTextBig}>Web Developer</h1>
        <h1 className={styles.aboutTextSmall}>based in Vancouver, BC.</h1>
      </motion.div>
      <motion.div
        // initial={{x: "100vw"}}
        animate={animation1}
        // transition={{type: 'string', duration: 1.25, bounce: .3}} className={styles.aboutRight}
      >
        <Image
          className={styles.image}
          alt="a photo of jamel with graphics"
          src="/group-11.png"
          width="400px"
          height="400px"
        />
      </motion.div>
    </div>
    // {/* </motion.div> */}
  );
}
