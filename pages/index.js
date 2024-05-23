import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import kursor from 'kursor';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (document.querySelector('.kursor') === null) {
      new kursor({
        type: 1,
        removeDefaultCursor: true,
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>vxnuaj.life</title>
        <link rel="icon" href="/me.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Source+Serif:wght@400;700&display=swap"></link>
        <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css"></link>
      </Head>

      <main>
        <p className= "intro" style = {{fontSize: '30px'}}>
          agency is all u need.
        </p>
      </main>
    </div>
  );
}
