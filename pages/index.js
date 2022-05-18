import { projects } from '../projects';
import styles from '../styles/Index.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export default function Projects() {
  const { ref, inView } = useInView({
    // threshold: 0.2,
  }); // inView = boolean (in view or not) // ref = reference to element
  const animation1 = useAnimation(); // initiate useAnimation hook
  const animation2 = useAnimation(); // initiate useAnimation hook
  const animation3 = useAnimation(); // initiate useAnimation hook

  const animation = {
    start: {
      scale: 0,
      opacity: 0,
      transition: {
        type: 'spring',
        duration: 2,
        bounce: 0.2,
      },
    },
    end: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 2,
        bounce: 0.2,
      },
    },
  };

  const allProjects = projects.map((project, idx) => {
    return (
      <motion.div
        initial="start"
        animate="end"
        custom={idx}
        key={`project-div-${idx}`}
        variants={animation}
      >
        {/* {console.log(`animation${idx+1}`)} */}
        <div key={`project-div-${idx}`} className={styles.projectDiv}>
          <Image
            className={styles.projectImage}
            src={project.image}
            alt="project image"
            width="300"
            height="200"
          />
          {/* <img src={project.image}></img> */}
          <div>
            {/* SUBTITLE */}
            <div>
              <h1 className={styles.subtitle}>{project.name}</h1>
            </div>
            {/* DESCRIPTION */}
            <div className={styles.paragraphDiv}>
              <p>{project.description}</p>
            </div>
            {/* LINKS */}
            <div className={styles.links}>
              <a
                rel="noreferrer noopener"
                id="live"
                href={project.deploy}
                target="_blank"
              >
                <button className={styles.deployButton}>View Live</button>
              </a>
              <a
                rel="noreferrer noopener"
                id="git"
                href={project.gitHub}
                target="_blank"
              >
                <button className={styles.githubButton}>Github Repo</button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  });

  return (
    <div id="featured-projects" className={styles.allProjectsDiv}>
      <h2 style={{ marginBottom: '0px' }}>Featured Projects:</h2>
      <div ref={ref} className={styles.allProjectsDiv}>
        {allProjects}
      </div>
    </div>
  );
}
