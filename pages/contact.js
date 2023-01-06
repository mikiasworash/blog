import ContactForm from '../components/contact/contact-form'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Mike's Blog | Contact</title>
        <meta name="description" content="Send me a message here" />
      </Head>
      <ContactForm />
      <ToastContainer />
    </>
  )
}
