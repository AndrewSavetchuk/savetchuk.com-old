export async function getLastCommitDate (username: string): Promise<string> {
  let lastCommitDate: string = '';

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
    const jsonResponse = await response.json();
    lastCommitDate = jsonResponse?.data?.user?.contributionsCollection?.latestRestrictedContributionDate as string;
  } catch (e) {}

  return lastCommitDate;
}
