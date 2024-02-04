import fetch from 'node-fetch';

export default async (req, res) => {
  try {
    // Reauthorize to get a new access token
    const reauthorizeResponse = await fetch('https://www.strava.com/oauth/token', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_SECRET,
        refresh_token: process.env.STRAVA_REFRESH_TOKEN,
        grant_type: 'refresh_token',
      }),
    });

    const reAuthJson = await reauthorizeResponse.json();

    // Calculate start date for the last week
    const endDate = new Date(); // Today
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 7); // One week ago

    // Convert start and end dates to Unix timestamps
    const startTimestamp = Math.floor(startDate.getTime() / 1000);
    const endTimestamp = Math.floor(endDate.getTime() / 1000);

    // Fetch activities within the last week
    const activitiesResponse = await fetch(`https://www.strava.com/api/v3/athlete/activities?after=${startTimestamp}&before=${endTimestamp}&access_token=${reAuthJson.access_token}`);
    const activitiesJson = await activitiesResponse.json();

    console.log('Activities JSON:', activitiesJson); // Log the entire API response

    // Check if activitiesJson is an array and has at least one activity
    if (Array.isArray(activitiesJson) && activitiesJson.length > 0) {
      // Log details of each activity for further inspection
      console.log('Activity Details:');
      activitiesJson.forEach(activity => {
        console.log(activity);
      });

      // Calculate weekly distance
      let weeklyDistance = 0;
      activitiesJson.forEach(activity => {
        weeklyDistance += activity.distance || 0; // Use 0 if distance is undefined
      });

      return res.status(200).json({
        weeklyDistance,
      });
    } else {
      return res.status(200).json({
        error: 'No running activities found in the last week',
      });
    }
  } catch (error) {
    console.error('Error fetching Strava data:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};
