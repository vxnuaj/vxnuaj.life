import Link from 'next/link';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css'
import writingStyles from '../../styles/writing.module.css'


export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className = {utilStyles.backButton}>
         ← <Link href = '/' className={utilStyles.noUline} > Back</Link>
      </div>
        <h1 className = {utilStyles.headingPost}>
          Projects
        </h1>
        <p className = {writingStyles.writDes}>
          Under Construction
        </p>
    </>
  );
}