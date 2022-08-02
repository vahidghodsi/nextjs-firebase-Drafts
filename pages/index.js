import Head from 'next/head';
import { useState } from 'react';
import { getUser } from '../services/pitch-users';
import { getSession } from '../services/pitch-sessions';

import styles from '../styles/Home.module.css';
import HomeContent from '../contents/home-content';

export default function Home() {
  const [user, setUser] = useState({});
  const [session, setSession] = useState({});

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}
        <HomeContent />
        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a onClick={() => getUser('test')} className={styles.card}>
            <h3>Get User &rarr;</h3>
            <p></p>
          </a>

          <a onClick={() => getSession('test')} className={styles.card}>
            <h3>Get Sessions &rarr;</h3>
            <p></p>
          </a>

          <a className={styles.card}>
            <h3>username</h3>
            <p>name : {user.name} </p>
            <p>login at : {user.created_at}</p>
          </a>

          <a className={styles.card}>
            <h3>session </h3>
            <p>feedbacks</p>
            <p>username : {user.name} </p>
            <p>staerted at : {user.created_at}</p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
