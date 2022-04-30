import { languages } from '../projects';
import Image from 'next/image';
import styles from '../styles/Languages.module.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

function Languages() {
  const { ref, inView } = useInView({
    // threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 6,
          bounce: 0.05,
          // delay: `.${i}`
        },
        // animate:{scale: 2},
      }));
      // controls.start("hidden")
      console.log('in view');
    }

    if (!inView) {
      controls.start({
        // x: '100vw',
        opacity: 0,
      });
      // controls.start({
      //   visible: {
      //     opacity: 1
      //   }
      // })
    }
  }, [inView]);

  const mappedImages = languages.map((element, idx) => {
    return (
      <motion.div
        custom={idx + 1}
        animate={controls}
        className={styles.logoDiv}
        key={`logo-${idx}`}
      >
        <Image
          className={styles.logos}
          alt={element.name}
          src={element.src}
          layout="fill"
          objectFit="cover"
          // width="115px"
          // height="115px"
        />
      </motion.div>
    );
  });

  return (
    <div className={styles.languageContainer}>
      <h2>Languages/Dev tools:</h2>
      <div ref={ref} className={styles.languages}>
        {mappedImages}
        <div className={styles.logoDivFigma}>
          <motion.div 
          custom={2} 
          animate={controls}
          >
            <Image
              className={styles.logos}
              alt="figma-logo"
              src="/languages_icons/figma.png"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Languages;
