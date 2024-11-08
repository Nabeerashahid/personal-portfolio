

import styles from '../styles/style.module.css';
export default function Navbar() {
    return(
        <div>
            <header>
      <nav className={styles.nav}>
            <div className={styles.left}>Nabeera Portfolio</div>

            <div className={styles.right}>
                <ul>
                    <li className='menuLink'><a href="#hero">Home</a></li>
                    <li className='menuLink'><a href="#About">About</a></li>
                    <li className='menuLink'><a href="#Skills">Skills</a></li>
                    <li className='menuLink'><a href="#Project">Project</a></li>
                    <li className='menuLink'><a href="#Contact">Contact me</a></li>
                </ul>
            </div>
        </nav>
      </header>
            </div>
    )
}