import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import runStyles from '../../styles/running.module.css';

export default function Running() {
  const [runningData, setRunningData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/strava'); // Assuming your API route is '/api/strava'
        const data = await response.json();
        setRunningData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching running data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Running</title>
        <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css"></link>
      </Head>
      <div className={utilStyles.backButton}>
        ← <Link href="/" className={utilStyles.noUline}>
          Back
        </Link>
      </div>
      <h1 className={utilStyles.headingPost}>Running</h1>
      <p className={runStyles.runDes1}>
        I train year-round (when I’m not injured, lol), for racing in the 1600m, 3200m, & 5000m. Here's some training data, logged since May of 2022.
      </p>

      <div className={runStyles.trainingDataSection}>
        {loading ? (
          <p className={runStyles.loading}>Loading...</p>
        ) : (
          <>
            <div className={runStyles.lifeMile}>
              <p>Lifetime Miles</p>
              <p className={runStyles.ranMile}>{runningData?.distance}</p>
            </div>
            <div className={runStyles.lifeTime}>
              <p>Total Time Ran</p>
              <p className={runStyles.ranTime}>{runningData?.movingTime}</p>
            </div>
            <div className={runStyles.lifeRan}>
              <p>Total Runs</p>
              <p className={runStyles.ranTotal}>{runningData?.count}</p>
            </div>
            <div className={runStyles.milePR}>
              <p>1600m PR</p>
              <p className={runStyles.mileTime}>05:10</p>
            </div>
            <div className={runStyles.twomilePR}>
              <p>3200m PR</p>
              <p className={runStyles.twomileTime}>11:09</p>
            </div>
          </>
        )}
      </div>

      <p className={runStyles.runDes}>
        I began running in 2022, with short 3 mile runs during rehab for a soccer injury.<br></br>
        After 1.5 years of training & compounded obsession, I’ve yet to look back.<br></br>
        Through long runs in a 90º F summer & snowy runs in 15º F, I find that <i><a href="https://sive.rs/extremex">a life without extremes, is a life unlived.</a></i>
      </p>
    </>
  );
}