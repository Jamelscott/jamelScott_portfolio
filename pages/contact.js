import styles from '../styles/Contact.module.css';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactLeft}>
        <h2 style={{fontSize:"24px"}} id='contact-me'>Want to know more?</h2>
      </div>
      <div className={styles.contactRight}>
        <h2 style={{ color: 'white' }}>
          Contact me, lets make magic together.
        </h2>
        <form action="https://formsubmit.co/itsjamelscott@gmail.com" method="POST" className={styles.contactForm}>
          {/* Name */}
          <label htmlFor="contact-name"></label>
          <input required className={styles.contactInput} type="text" name="name" placeholder="Name:" />
          {/* Email */}
          <label htmlFor="contact-email"></label>
          <input className={styles.contactInput}  type="email" placeholder="Email:" name="email" required />
          {/* Message */}
          <label htmlFor="contact-message"></label>
          <textarea style={{height: "120px", paddingTop:"10px"}} className={styles.contactInput} name="message" type="text" placeholder="Message:" required />
          {/* <input type="hidden" name="_next" value="https://http://localhost:3000/thankyou"/> */}
          <input type="hidden" name="_subject" value="You've got mail!"></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <input className={styles.sendButton} type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
