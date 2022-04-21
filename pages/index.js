import { projects } from '../projects';
import styles from '../styles/Index.module.css';
import Image from 'next/image';
export default function Projects() {
  const allProjects = projects.map((project, idx) => {
    return (
      <div key={`project-div-${idx}`} className={styles.projectDiv}>
        <Image
          className={styles.projectImage}
          src={project.image}
          alt="project image"
          width="100%"
          height="200"
        />
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
    );
  });

  return (
    <div className={styles.allProjectsDiv}>
      <h2 style={{marginBottom:"0px"}} id="featured-projects">Featured Projects..</h2>
      <div className={styles.allProjectsDiv}>{allProjects}</div>
    </div>
  );
}
