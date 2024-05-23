import Link from 'next/link';
import Head from 'next/head';
import Date from '../../components/date'
import writingStyles from '../../styles/writing.module.css'
import utilStyles from '../../styles/utils.module.css'
import { getSortedProjData } from '../../lib/projects';
import kursor from 'kursor';
import { useEffect } from 'react';

export default function Projects({ allProjData }) {
  useEffect(() => {
    if (document.querySelector('.kursor') === null) {
      new kursor({
        type: 1,
        removeDefaultCursor: true,
      });
    }
  }, []);
  return (
    <>
      <Head>
        <title>Archive</title>
        <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css"></link>
      </Head>
      <div className = {utilStyles.backButton}>
         ← <Link href = '/' className={utilStyles.noUline} > Back</Link>
      </div>
        <h1 className = {utilStyles.headingPost}>Archive</h1>
        <p className = {writingStyles.writDes}>
        Just some older things I've worked on in the past.
        </p>
          { /* <ul className = {writingStyles.blogList}>
            {allProjData.map(({projid, date, title }) => (
              <li className = {writingStyles.blogPost} key = {projid}>
                <div className = {writingStyles.blogHeading}>
                  <Link href = {`/projects/${projid}`} className = {utilStyles.noUline}>{title}</Link>
                </div>
                <small>
                  <Date dateString={date}/>
                </small>
              </li>
            ))}
          </ul>
            <Link href = '/archive'>Archive</Link> */}
      </>
    );
}

export async function getStaticProps() {
  const allProjData = getSortedProjData();
  return {
    props: {
      allProjData,
    },
  };
}