import React from "react";
import styles from '../styles/style.module.css';

interface propsType {
    title : string;
}

const Heading: React.FC<propsType> = ({title}) => {
    return(
        <div className= {styles.pro}>
            <p className={styles.para}> {title} </p>

        </div>
    )
}

export default Heading