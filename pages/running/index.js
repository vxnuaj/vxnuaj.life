import Link from 'next/link';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import writingStyles from '../../styles/writing.module.css';
import runStyles from '../../styles/running.module.css';

export default function Running() {
  return (
    <>
      <Head>
        <title>Running</title>
      </Head>
      <div className = {utilStyles.backButton}>
         ← <Link href = '/' className={utilStyles.noUline} > Back</Link>
      </div>
        <h1 className = {utilStyles.headingPost}>
          Running
        </h1>
        <p className = {writingStyles.writDes}>
        I train year-round [when I’m not injured, lol], for racing in the 1600m, 3200m, & 5000m 
        </p>
        <div className = {runStyles.mileWeek}>
          <p>Miles This Week</p>
          <p></p>
          </div>
    </>
  );
}