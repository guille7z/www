const GITHUB_USER = 'guille7z';

export async function load({ fetch }) {
    const res = await fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`
    );

    if (!res.ok) {
        return { repos: [], error: `GitHub API error: ${res.status}` };
    }

    const data = await res.json();

    const repos = data.filter((r: any) => !r.fork && !r.archived).map((r: any) => ({
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
}