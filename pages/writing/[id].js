import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import kursor from 'kursor';
import { useEffect } from 'react';

export async function getStaticProps({ params }) {

  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }

  export default function Post({ postData }) {
    useEffect(() => {
  if (document.querySelector('.kursor') === null) {
    new kursor({
      type: 1,
      removeDefaultCursor: true,
    });
  }
}, []);
    return (
      <Layout>
          <Head>
        <title>{postData.title}</title>
        <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css"></link>
         </Head>
         <article>
        <div className = {utilStyles.backButton}>
         ← <Link href = '/writing' className={utilStyles.noUline} > Back</Link>
        </div>
        <h1 className={utilStyles.headingPost}>{postData.title}</h1>
        <br />
        <div className = {utilStyles.postDate}>
            <Date dateString={postData.date}/>
        </div>
        <br />
        <div className = {utilStyles.postContent}>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        </article>
      </Layout>
    );
  }
