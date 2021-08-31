import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import aboutData from '../public/about-data'
import Card from '../components/card'

export async function getStaticProps() {
    return {
        props: {
            aboutData
        }
    }
}

export default function About(props) {
    console.log(props)
    return (
        <div className={styles.container}>
            <Head>
                <title>About Me</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
           
            <div className={styles.header}>
                <Image
                    priority
                    src='/spiderman.jpg'
                    height={200}
                    width={200}
                    alt='spiderman picture'
                    className={styles.image}
                />
                <h1 className={styles.title}>About Me</h1>
            </div>
            <div>
                <Link href='/'>
                    <a className={styles.links}>Home</a>
                </Link>
                <Link href='/journey'>
                    <a className={styles.links}>My Journey</a>
                </Link>
                <Link href='/hobbies'>
                    <a className={styles.links}> My Hobbies</a>
                </Link>   
            </div>
            {props.aboutData.map((snippet) => {
               return <Card props={snippet}/>
            })}
            <footer className={styles.footer}>
            </footer>
        </div>
    )
}