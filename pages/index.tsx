import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.landingImage}
        src="/allie-orange-juice-bg.png"
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
          Delicious breakfast made with the best ingredients.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Menu &rarr;</h2>
            <p>View our menu made from the finest ingredients.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Gallery &rarr;</h2>
            <p>Photos of all the food we love to make!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>About &rarr;</h2>
            <p>Learn about the history of the cafe.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Contact &rarr;</h2>
            <p>
              We love mail! Get in touch with us!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Made with love by Dad
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
      </footer>
    </div>
  )
}

export default Home
