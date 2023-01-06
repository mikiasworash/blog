import ContactForm from '../components/contact/contact-form'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <ToastContainer />
    </>
  )
}
