import Head from 'next/head';
// import { useState } from 'react';

import styles from '../../styles/Home.module.css';
import BlocksContent from '../../contents/blocks-content';

export default function BlocksPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <BlocksContent />
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
