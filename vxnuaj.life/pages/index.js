import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>vxnuaj.life</title>
        <link rel="icon" href="/me.ico" />
        <link rel="stylsheet" href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Source+Serif:wght@400;700&display=swap"></link>
      </Head>

      <main>
        <h1 className='intro'>Hey, I'm Juan!</h1>
        <p className = 'des'>
        Currently, I’m building at the intersection of Brain Computer Interfaces & AI, with <br></br>
        a vision of creating the future of humanity at the bleeding edge of emerging technologies.
        </p>
        <p className = 'des2'>
          For the past year, I’ve been blessed to be part of <a href = "https://tks.world">The Knowledge Society</a>,<br></br>
          a human accelerator designed to maximize human potential.
        </p>
        <p className = 'des3'>
        I’m fascinated about philosophies of fulfillment, implications of Artificial
        <br></br>General Intelligence, theories of consciousness, and unlocking human potential.
        </p>
        <p className = 'updates'>
          Stay updated, <a href = "https://vxnuaj.substack.com">here</a> ;)
        </p>
        <p className = 'links'> 
          <b><Link href="/writing" className = {utilStyles.noUline}>Writing</Link> · <Link href = "/projects" className = {utilStyles.noUline}>Projects</Link> · <Link href = "/running" className = {utilStyles.noUline}>Running</Link></b>
        </p>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: left;
          padding-top: 230px;
        }

        .intro {
          font-size: 30px;
          font-family: 'PT Serif', serif;
          font-style: italic;
          font-weight: 500;
          position: relative;
          left: 25px;
          width: fit-content;
          margin-bottom: 0px;
        }

        .des,
        .des2,
        .des3,
        .updates,
        .links {
          font-size: 16px;
          font-family: 'PT Serif', serif;
          font-style: italic;
          line-height: 25px;
          width: 100%; /* Take full width of the container */
          max-width: 600px; /* Set a maximum width to prevent text from getting too wide */
          position: relative;
          left: 25px;
          margin-bottom: 0px;
        }

        @media (max-width: 600px) {
          .des {
            top: 0; /* Adjusted top position for .des */
          }
        
          .des2 {
            top: 0; /* Adjusted top position for .des2 */
          }
        
          .des3 {
            top: 0; /* Adjusted top position for .des3 */
          }
        
          .updates {
            top: 0; /* Adjusted top position for .updates */
          }
        
          .links {
            top: 0; /* Adjusted top position for .links */
          }
        }
        

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            'Source Serif 4', serif;
        }
        * {
          box-sizing: border-box;
        }

        a {
          color: inherit;
        }

      
      `}</style>
    </div>
  );
}
