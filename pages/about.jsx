//import service side rendering to cache image tags
import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function About() {
  return (
      <div
        class="center"
        className={styles.blueBack}
        style={{ backgroundColor: 'white' }}
      >
        <h1 className={styles.tealText}>About Me</h1>

        <p>I am super cool</p>
        {/* an image tag would have also worked -- just no SSR caching */}
        <Image
          src="/vercel.svg"
          alt="vercel logo"
          width="500px"
          height="500px"
        />
        {/* laoding an image from another hosting domain */}
        <Image
          src="https://placekitten.com/400/300"
          alt="a picture of a cat"
          width="100%"
          height="100%"
        />
      </div>
  );
}
