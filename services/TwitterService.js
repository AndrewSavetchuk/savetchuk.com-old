export async function getLastTweetDate (username) {
  let url;
  let jsonResponse;

  const token = process.env.TWITTER_BEARER_TOKEN;

  const headers = {
    'Authorization': `bearer ${token}`
  };

  url = 'https://api.twitter.com/2/tweets/search/recent';
  url = `${url}?query=${username}&tweet.fields=created_at`;

  const response = await fetch(url, {
    method: 'GET',
    headers
  });

  try {
    jsonResponse = await response.json();

    const lastTweetDate = jsonResponse?.data?.[0]?.created_at;
    const date = new Date(lastTweetDate);
    const offsetInMinutes = date.getTimezoneOffset();
    const offsetInMilliseconds = offsetInMinutes * 60 * 1000;
    const localDateTime = new Date(date.getTime() - offsetInMilliseconds);

    jsonResponse = localDateTime.toISOString();
  } catch (e) {
    jsonResponse = undefined;
  }

  return jsonResponse;
}
