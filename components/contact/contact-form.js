import styles from './contact-form.module.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'

export default function ContactForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_9n3binl',
        'template_7weuk3g',
        form.current,
        'IBmBVK2_vByhwPAv_'
      )
      .then(
        (result) => {
          toast.success('Message Sent!')
        },
        (error) => {
          toast.error('Sending message Failed!')
        }
      )

    e.target.reset()
  }

  return (
    <section className={styles.contact}>
      <h1>Contact Me</h1>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
        </div>

        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>

        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  )
}
