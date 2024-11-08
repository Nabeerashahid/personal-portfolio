
import styles from '../styles/style.module.css';
import Heading from './Heading';
import Card from './Card';
const data = [
    {
        id: 0,
        title: "Countdown Timer", 
        desc: "Build a countdown timer using React and TypeScript, styled with CSS, and powered by Node.js for backend time synchronization.",
        img: "/countdown.webp",
        tags: ["React", "Node" , "CSS" , " HTML"],
    },

    {
        id: 1,
        title: "Simple Calculator",
        desc: "A simple calculator built with Node.js, CSS, React, and TypeScript for efficient and interactive calculations.",
        img: "/calculator.webp",
        tags: ["React", "Node" , "CSS" , " HTML"],
    },

    {
        id: 2,
        title: "figma project",
        desc: "A Figma project built with Node.js, styled using CSS, and developed using React and TypeScript.",
        img: "/figma.jpg",
        tags: ["React", "Node" , "CSS" , " HTML"],
    },
]
export default function Projects() {
    return(
        <div id='Project' className={styles.Projects}data-aos="zoom-in-right">
           <Heading title='My Projects' />
           <div className={styles.card}>
            {data.map((el) =>(
            <Card 
            key={el.id} 
            title={el.title} 
            desc={el.desc}
            img={el.img} 
            tags={el.tags} 
            />))}
           </div>
        </div>
    )
}