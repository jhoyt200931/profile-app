import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Card({props}) {
  return(
    <div className={styles.textDiv}>
        {(props.image) ? <Image priority src={props.image} height={150} width={150} alt={props.alt}/>: null}
        <p className={styles.description}>
            {props.text}
        </p>
    </div>
  )
}