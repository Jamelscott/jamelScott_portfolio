import { languages } from "../projects";
import Image from "next/image";
import styles from '../styles/Languages.module.css'

function Languages() {

    const mappedImages = languages.map((element, idx)=>{

        return (
            <div>
                <Image
                className={styles.logos}
                alt={element.name}
                src={element.src}
                width='115px'
                height='115px'
                 />
            </div>
        )
        
        })

    return ( 
        <div className={styles.languageContainer} >
        <h2>Languages/Dev tools:</h2>
        <div className={styles.languages}>
        {mappedImages}
        <Image
        className={styles.logos}
        alt="figma-logo"
        src='/languages_icons/figma.png'
        width='75px'
        height={"100px"}
        />
        </div>
        </div>
     );
}

export default Languages;


// {
//     name: "figma-logo",
//     src: '/languages_icons/figma.png'
//   },