import Image from 'next/image';
import styles from '../styles/style.module.css';
export default function Hero(){
    return(
    <div className={styles.image} >
       <Image 
       src="/girl.webp"
       alt='Hero image'
       width={150}
       height={150}
       className={styles.myImage}
       />
       <div className={styles.fname}data-aos="zoom-in-up">
       HI, My name is <span className={styles.name}>Nabeera</span> 
       <br/>
       <div className={styles.lname}data-aos="zoom-in"> And I am a </div>
                <span className={styles.element}> Web Developer </span>
         </div>
      </div>
    );
  }