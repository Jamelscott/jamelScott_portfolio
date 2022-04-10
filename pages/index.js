import {projects} from './projects'
import styles from '../styles/Index.module.css'
import Image from 'next/image'
export default function Projects() {

  const allProjects = projects.map((project, idx)=>{

    return (
      <div className={styles.projectDiv}>
        <Image
        src={project.image}
        alt="project image"
        width="400"
        height="200"
        />
        <h1 style={{color:'#7562E0'}}>{project.name}</h1>
        <p style={{color:'white'}}>{project.description}</p>
        <div style={{display: 'flex', justifyContent: "center",gap: "20px"}}>
          <a href={project.deploy}><button className={styles.deployButton}>View Live</button></a>
          <a  href={project.gitHub}><button className={styles.githubButton}>Github Repo</button></a>
        </div>
      </div>
    )

  })



  return (
   
    <div className={styles.allProjectsDiv}>
    {allProjects}

    </div>
  )
}
