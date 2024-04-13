import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllProjIds, getProjData } from '../../lib/projects';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import kursor from 'kursor';
import { useEffect } from 'react';
import remark from 'remark';
import remarkMath from 'remark-math';
import remarkHTML from 'remark-html';


export async function getStaticProps({ params }) {

  const projData = await getProjData(params.projid);
 
  return {
    props: {
      projData,
    },
  };
}

export async function getStaticPaths() {
    const paths = getAllProjIds();
    return {
      paths,
      fallback: false,
    };
  }

  export default function Proj({ projData }) {
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
        <title>{projData.title}</title>
        <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css"></link>
         </Head>
         <article>
        <div className = {utilStyles.backButton}>
         ← <Link href = '/projects' className={utilStyles.noUline} > Back</Link>
        </div>
        <h1 className={utilStyles.headingPost}>{projData.title}</h1>
        <br />
        <div className = {utilStyles.postDate}>
            <Date dateString={projData.date}/>
        </div>
        <br />
        <div className = {`${utilStyles.postContent} markdown-content`}>
        <div dangerouslySetInnerHTML={{ __html: projData.contentHtml }} />
        </div>
        </article>
      </Layout>
    );
  }
