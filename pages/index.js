import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
library.add(
  faGithub,
  faLinkedin
)

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>John's profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.menu}>
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
              Johnathan Hoyt
            </h1>
            <h2>Web Developer</h2>
          </div>

          <ul className={styles.navigation}>
            <Link href='/journey'>
              <a className={styles.links}>My Journey</a>
            </Link>
            <Link href='/about'>
              <a className={styles.links}>About Me</a>
            </Link>
            <Link href='/hobbies'>
              <a className={styles.links}>My Hobbies</a>
            </Link>
            <Link href='https://www.linkedin.com/in/johnathan-hoyt-177508146/'>
              <FontAwesomeIcon icon={faLinkedin} style={{width: '40px'}} />
            </Link>
            <Link href='https://github.com/jhoyt200931'>
              <FontAwesomeIcon icon={faGithub} style={{width: '40px'}}/>
            </Link>
          </ul>
        </div>
        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Home</h1>
          <p className={styles.description}>
            Hello, my name is Johnathan and this is a small site containing information about me, some of my projects and my journey to become a developer. Below you will find a few of the projects I've done or contributed to:
          </p>
          <div className={styles.projects}>
            <Image 
              priority 
              src='/R&Mproject.jpg'
              height={300}
              width={500}
              alt='Rick and Morty project'
              className={styles.image}
            />
            <a className={styles.links} href='https://rick-and-morty-characters.vercel.app/'>My Rick and Morty API project</a>
          </div>
          <div className={styles.projects}>
            <Image 
              priority
              src='/MedCab.jpg'
              height={300}
              width={500}
              alt='MedCab project'
              className={styles.image}
            />
            <a className={styles.links} href='https://medcab-react-team.vercel.app/login'>My MedCab build-week project</a>
          </div>
          <div className={styles.projects}>
            <Image 
              priority
              src='/nasaproject.jpg'
              height={300}
              width={500}
              alt='Nasa Project'
              className={styles.image}
            />
            <a className={styles.links} href='https://github.com/jhoyt200931/nasa-photo-of-the-day'>Link to my Nasa Project Repo</a>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
            <Link href='https://www.linkedin.com/in/johnathan-hoyt-177508146/'>
              <FontAwesomeIcon icon={faLinkedin} style={{width: '50px'}} />
            </Link>
            <Link href='https://github.com/jhoyt200931'>
              <FontAwesomeIcon icon={faGithub} style={{width: '50px', margin: '10px'}}/>
            </Link>
      </footer>
    </div>
  )
}
