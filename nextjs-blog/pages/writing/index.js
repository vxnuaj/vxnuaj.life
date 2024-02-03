import Link from 'next/link';
import Head from 'next/head';
import Date from '../../components/date';
import writingStyles from '../../styles/writing.module.css'
import utilStyles from '../../styles/utils.module.css'

import {getSortedPostsData} from '../../lib/posts';

export default function Writing({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Writing</title>
      </Head>
      <div className = {utilStyles.backButton}>
         ← <Link href = '/' className={utilStyles.noUline} > Back</Link>
      </div>
      <h1 className = {writingStyles.writHeading}>Writing</h1>
      <p className = {writingStyles.writDes}>I ship monthly updates via my Newsletter, publish articles on my curiosities <br></br> through Medium, and occasionally write some thoughts on this page.</p>
      <p className = {writingStyles.writLinks}><a href = 'https://vxnuaj.substack.com' className={utilStyles.noUline} >Newsletter</a> · <a href = 'https://medium.com/@vxnuaj' className={utilStyles.noUline}>Medium</a></p>
      <p className = {writingStyles.writDes}>Hope you enjoy :)</p>
        <ul className = {writingStyles.blogList}>
          {allPostsData.map(({id, date, title }) => (
            <li className = {writingStyles.blogPost} key = {id}>
              <div className = {writingStyles.blogHeading}>
                <Link href = {`/writing/${id}`} className = {utilStyles.noUline}>{title}</Link>
              </div>
              <small>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>

    </>
  );
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}