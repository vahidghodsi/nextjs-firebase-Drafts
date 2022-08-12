import Head from 'next/head';
import { useState } from 'react';
import { getUser } from '../services/pitch-users';
import { getSession } from '../services/pitch-sessions';

import styles from '../styles/Home.module.css';
import BehaviorContent from '../contents/behavior-content';

export default function BehaviorPage() {
  const [user, setUser] = useState({});
  const [session, setSession] = useState({});

  return (
    <div className="_fix-layout">
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="_main-content">
        <main className="_container">
          <BehaviorContent />
        </main>

        <footer className={styles.footer}>
          <a href="https://next.new" target="_blank" rel="noopener noreferrer">
            Created with&nbsp;<b>next.new</b>&nbsp;⚡️
          </a>
        </footer>
      </div>
    </div>
  );
}
