import styles from '../styles/Contact.module.css';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactLeft}>
        <h2 id='contact-me'>Want to know more?</h2>
      </div>
      <div className={styles.contactRight}>
        <h2 style={{ color: 'white' }}>
          Contact me, lets make magic together.
        </h2>
        <form className={styles.contactForm}>
          <label htmlFor="contact-name"></label>
          <input className={styles.contactInput} type="input" placeholder="Name:" />
          <label htmlFor="contact-email"></label>
          <input className={styles.contactInput}  type="input" placeholder="Email:" />
          <label htmlFor="contact-message"></label>
          <textarea style={{height: "120px", paddingTop:"10px"}} className={styles.contactInput}  type="input" placeholder="Message:" />
          <input className={styles.sendButton} type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
