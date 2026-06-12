<script lang="ts">
    import Figlet from '$lib/components/Figlet.svelte';
    import type { PageData } from './$types.js';    

    let { data }: { data: PageData } = $props();
</script>

<title>blog</title>

<div class="center">
    <Figlet>blog</Figlet>
    <br/><br/>
    <a href="/">go home</a><!-- -
    <a href="">latest post</a>-->
</div>

<br/><br/>
{#each data.posts as post}
    <a href="/blog/{post.slug}" class="post-card">
        <h2>{post.title}</h2>
        <p class="desc">{post.description}</p>
        <span class="date">{post.date}</span>
    </a>
{/each}

<style>
    :global(body) {
        max-width: 860px;
        margin: 0 auto;
        padding: 2rem;
    }

    .post-card {
        display: block;
        background: #1a1a1a;
        border: 1px solid #2a2a2a;
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1rem;
        text-decoration: none;
        color: inherit;
        transition: border-color 0.2s;
    }

    .post-card:hover {
        border-color: #555;
    }

    .post-card h2 {
        margin: 0 0 0.5rem 0;
        font-size: 1.2rem;
    }

    .desc {
        margin: 0 0 0.75rem 0;
        color: #aaa;
        font-size: 0.9rem;
    }

    .date {
        font-size: 0.8rem;
        color: #666;
    }
</style>