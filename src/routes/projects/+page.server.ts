import type { PageServerLoad } from "./$types";

const GITHUB_USER = "guille7z";

export const load: PageServerLoad = async ({ fetch, platform }) => {
  const token = platform?.env?.GITHUB_TOKEN;

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": GITHUB_USER,
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    },
  );

  if (!res.ok) {
    console.error("GitHub API error", res.status, await res.text());
    return { repos: [], error: `GitHub API error: ${res.status}` };
  }

  const data: any[] = await res.json();

  const repos = data
    .filter((r) => !r.fork && !r.archived)
    .sort(
      (a, b) =>
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
    )
    .map((r) => ({
      id: r.id,
      name: r.name,
      description: r.description,
      html_url: r.html_url,
      homepage: r.homepage || null,
      language: r.language,
      stargazers_count: r.stargazers_count,
      forks_count: r.forks_count,
      topics: r.topics ?? [],
    }));

  return { repos, error: null };
};
