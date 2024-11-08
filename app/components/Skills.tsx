import React from 'react'
import styles from '../styles/style.module.css';

const Skills = () => {
    return(
        <div id='Skills' className={styles.container}>
        <div className={styles.skills}>
            <div>
                <h2 className={styles.skillshead} data-aos="zoom-out-left"> Skills </h2>
                <h2 className={styles.skillstext} data-aos="zoom-in-right"> Technologies I work with</h2>
                <p className={styles.para} data-aos="zoom-in-up">
                I have a strong foundation in web development, proficient in HTML, CSS, and JavaScript. I specialize in building responsive, user-friendly websites using modern frameworks like React. I am also skilled in server-side development with Node.js and can integrate APIs seamlessly. Continuously improving my skills, I stay updated with the latest web technologies and best practices.
                </p>
            </div>
            <div>
                <div className={styles.skills2}>
                    <div className={styles.skillstext2}>
                        <h2 data-aos="zoom-in-up">TypeScript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                    <div className={styles.skillstext2}>
                        <h2 data-aos="zoom-in-down">Talwind</h2>
                        <h2 data-aos="zoom-in-down">CSS</h2>
                        <h2 data-aos="zoom-in-down">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Skills