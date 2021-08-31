import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import journeyData from '../public/journey-data'
import Card from '../components/card'

export async function getStaticProps() {
    return {
        props: {
            journeyData
        }
    }
}
export default function Journey(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>John's Journey</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <Image
            className={styles.image}
            priority
            src='/batman.jpg'
            height={200}
            width={200}
            alt='batman picture'
          />
          <h1 className={styles.title}>
            My Journey
          </h1>
        </div>

        <ul>
            <Link href='/'>
            <a className={styles.links}>Home</a>
            </Link>
          <Link href='/about'>
            <a className={styles.links}>About Me</a>
          </Link>
          <Link href='/hobbies'>
            <a className={styles.links}>My Hobbies</a>
          </Link>
        </ul>
        {props.journeyData.map((snippet) => {
          return  <Card props={snippet}/>
        })}
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}