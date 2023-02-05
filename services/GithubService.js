export async function getLastCommitDate (username) {
  let jsonResponse;

  const url = 'https://api.github.com/graphql';
  const token = process.env.GITHUB_ACCESS_TOKEN;

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      query: `query {
        user(login: "${username}") {
          contributionsCollection {
            latestRestrictedContributionDate
          }
        }
      }`
    }),
    headers: {
      'Authorization': `bearer ${token}`
    },
  });

  try {
    jsonResponse = await response.json();
    jsonResponse = jsonResponse?.data?.user?.contributionsCollection;
    jsonResponse = jsonResponse?.latestRestrictedContributionDate;
  } catch (e) {
    jsonResponse = undefined;
  }

  return jsonResponse;
}
