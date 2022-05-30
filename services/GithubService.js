export async function getLastCommitDate (username) {
  let jsonResponse;

  const token = process.env.GITHUB_ACCESS_TOKEN;

  const headers = {
    'Authorization': `bearer ${token}`
  };

  const body = {
    'query': `query {
      user(login: "${username}") {
        contributionsCollection {
          latestRestrictedContributionDate
        }
      }
    }`
  };

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(body),
    headers
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
