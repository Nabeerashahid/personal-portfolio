
import React from 'react'
import styles from '../styles/style.module.css';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

function Contact() {
  return (
    <div id='Contact' className={styles.Contact}>
      <div className={styles.container2}>
        <div className={styles.Heading2}>
            <h1 data-aos="fade-up-left">Contact</h1>
            <h2 data-aos="fade-down-right">Get in touch</h2>
            <p data-aos="zoom-in-right">Drop me a line, give me a call , por snd me a message by submitting the form</p>
            <div className={styles.icons} data-aos="zoom-in-right">
            <AiOutlineMail size={30}/> xyz@gmail.com
            </div>
            <div className={styles.icons} data-aos="zoom-in-right">
            <BsTelephone  size={20}/> (021)-111-000
            </div>
        </div>
        <div className={styles.Heading3}data-aos="zoom-out-left">
          <div className={styles.form}>
            <label htmlFor='name'>Name </label>
            <input type='text'
            className={styles.input} 
            id='name' />
          </div>
          <div className={styles.form}>
            <label htmlFor='email'>E-mail </label>
            <input type='text'
            className={styles.input} 
            id='email' />
          </div>
          <div className={styles.form}>
            <label htmlFor='message'>Message </label>
            <textarea 
            className={styles.textarea} 
            id='message' rows={8}>
              </textarea>
          </div>
          <button className={styles.submit}data-aos="zoom-in-right">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
