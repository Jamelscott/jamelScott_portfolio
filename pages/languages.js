import { languages } from '../projects';
import Image from 'next/image';
import styles from '../styles/Languages.module.css';

function Languages() {
  const mappedImages = languages.map((element, idx) => {
    return (
      <div className={styles.logoDiv} key={`logo-${idx}`}>
        <Image
          className={styles.logos}
          alt={element.name}
          src={element.src}
          layout="fill"
          objectFit="cover"
          // width="115px"
          // height="115px"
        />
      </div>
    );
  });

  return (
    <div className={styles.languageContainer}>
      <h2>Languages/Dev tools:</h2>
      <div className={styles.languages}>
        {mappedImages}
        <div className={styles.logoDivFigma}>
          <Image
            className={styles.logos}
            alt="figma-logo"
            src="/languages_icons/figma.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Languages;
