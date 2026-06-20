<script lang="ts">
    import Figlet from "$lib/components/Figlet.svelte";
    import { Star, GitFork } from "@lucide/svelte";
    const { data } = $props();
    const { repos, error } = data;
</script>

<title>projects</title>

<div class="center">
    <Figlet text="projects" />
    <br /><br />
    <a href="/">go home</a>
</div>

<br /><br />

{#if error}
    <p class="status error">{error}</p>
{:else if repos.length === 0}
    <p class="status">(no repos found - do i exist?)</p>
{:else}
    <div class="grid">
        {#each repos as repo}
            <div class="card">
                <div class="card-header">
                    <h2>{repo.name}</h2>
                    {#if repo.language}
                        <span class="label">{repo.language}</span>
                    {/if}
                </div>
                {#if repo.description}
                    <p class="desc">{repo.description}</p>
                {:else}
                    <p class="desc">(no description)</p>
                {/if}
                {#if repo.topics.length}
                    <div class="tags">
                        {#each repo.topics as topic}
                            <span class="tag">{topic}</span>
                        {/each}
                    </div>
                {/if}
                <div class="meta">
                    <span><Star size={20} /> {repo.stargazers_count}</span>
                    <span><GitFork size={20} /> {repo.forks_count}</span>
                </div>
                <div class="links">
                    <a href={repo.html_url} class="btn">repo ↗</a>
                    {#if repo.homepage}
                        <a href={repo.homepage} class="btn btn-primary"
                            >demo ↗</a
                        >
                    {/if}
                </div>
            </div>
        {/each}
    </div>
{/if}

<style>
    :global(body) {
        max-width: 860px;
        margin: 0 auto;
        padding: 2rem;
    }

    .status {
        color: #666;
        font-size: 0.9rem;
    }

    .error {
        color: #c06060;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
    }

    .card {
        background: #1a1a1a;
        border: 1px solid #2a2a2a;
        border-radius: 10px;
        padding: 1.25rem 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition: border-color 0.2s;
    }

    .card:hover {
        border-color: #444;
    }

    .card-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 8px;
    }

    .card h2 {
        margin: 0;
        font-size: 1rem;
        font-weight: 500;
    }

    .label {
        font-size: 0.7rem;
        color: #888;
        border: 1px solid #333;
        border-radius: 99px;
        padding: 2px 10px;
        white-space: nowrap;
        flex-shrink: 0;
    }

    .desc {
        margin: 0;
        color: #aaa;
        font-size: 0.85rem;
        line-height: 1.5;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }

    .tag {
        font-size: 0.7rem;
        color: #666;
        background: #222;
        border: 1px solid #2a2a2a;
        border-radius: 4px;
        padding: 3px 8px;
    }

    .meta {
        display: flex;
        gap: 12px;
        font-size: 0.75rem;
        color: #555;
        margin-top: auto;
    }

    .links {
        display: flex;
        gap: 8px;
        padding-top: 6px;
    }

    .meta span {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .btn {
        font-size: 0.8rem;
        padding: 4px 14px;
        border: 1px solid #333;
        border-radius: 99px;
        color: #aaa;
        text-decoration: none;
        transition:
            border-color 0.2s,
            color 0.2s;
    }

    .btn:hover {
        border-color: #666;
        color: #eee;
    }

    .btn-primary {
        color: #eee;
        border-color: #555;
    }
</style>
