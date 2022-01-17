import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.landingImage}
        src="/allie-orange-juice-bg.jpeg"
        alt="background-image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Head>
        <title>Allie Cafe</title>
        <meta name="description" content="Allie cafe cooks home made breakfast from scratch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Allie Cafe
        </h1>

        <p className={styles.description}>
          Breakfast served all day!
        </p>

        <div className={styles.grid}>
          <Link href="/menu">
            <a className={styles.card}>
              <h2>Menu &rarr;</h2>
              <p>View our menu made from the finest ingredients.</p>
            </a>
          </Link>

          <a className={styles.card}>
            <h2>Gallery &rarr;</h2>
            <p>Photos of all the food we love to make!</p>
          </a>

          <a className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Learn about the history of the cafe.</p>
          </a>

          <a className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>
              We love mail! Get in touch with us!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Made with love by Dad
      </footer>
    </div>
  )
}

export default Home