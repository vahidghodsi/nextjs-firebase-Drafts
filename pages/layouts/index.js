import Head from 'next/head';

import styles from '../../styles/Home.module.css';
import LayoutContent from '../../contents/layout/layout-content';

export default function Home() {
  return (
    <div className={styles.container} style={{ padding: '0' }}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main} style={{ padding: '0' }}>
        <LayoutContent />
      </main>
    </div>
  );
}
