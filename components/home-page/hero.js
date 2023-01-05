import styles from './hero.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/pic.jpg"
          alt="an image showing Mikias"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Mikias</h1>
      <p>I blog about web development.</p>
    </section>
  )
}
