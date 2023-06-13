import { ContactForm } from "../../components/contactForm";
import styles from '@/styles/contact.module.scss'
import { LocationIcon } from "../../components/locationIcon";

export default function Contact() {

  return <main>
    <section className={styles.contactForm}>
      <div>
        <h1>Contact us</h1>
        <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how
          we can help your business grow. If you are looking for unique digital experiences that’s
          relatable to your users, drop us a line.</p>
      </div>
      <ContactForm />
    </section>

    <LocationIcon />










  </main>

}