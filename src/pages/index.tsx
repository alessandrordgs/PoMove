import { FiArrowRight } from 'react-icons/fi';
import styles from '../styles/pages/Login.module.css';
import Link from 'next/link'
import Head from 'next/head';
export default function login(){
  return (
    
    <main className={styles.main}>
      <Head> <title>Login | Pomove </title></Head>
      <div className={styles.logoMain}>
        <img src="logoMain.svg" alt=""/>
      </div>

      <div className={styles.login}>
        <div className={styles.logoSeg}>
          <img src="logoSeg.svg" alt=""/>
        </div>
        
        <div className={styles.fieldLogin}>
           <h1>Bem-vindo</h1>
           <span>Faça o login</span>
           <label className={styles.label}>
              <input className={styles.input} type="text" name="" id=""/>
              <button className={styles.button}>
               <Link href='/challenge'>
               <FiArrowRight />
               </Link>
              </button>
           </label>
        </div>

      </div>
    </main>
  )
}