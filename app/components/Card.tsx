import styles from '../styles/style.module.css';
import React from 'react';
import Image from 'next/image';

interface propsType{
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card:React.FC<propsType>= ({title, desc, img, tags}) => {
    return(
        
        <div className={styles.border}data-aos="zoom-in-up">
            <div>
          <Image className={styles.cardimg}
          src={img}
          width={300}
          height={250}
          alt={title}
          />
           </div>

           <div className={styles.border2}>
            <div className={styles.text}>{title}</div>
            <div>{desc}</div>
            <div>
                {tags.map((el) => (
                <div className={styles.tags} key={el} >
                    {el}
                 </div>))}
            </div>
           </div>
        </div>
    )
}

export default Card