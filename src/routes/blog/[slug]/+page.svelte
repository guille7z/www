<script lang="ts">
    import type { PageData } from './$types.js';

    let { data }: { data: PageData } = $props();
    const { content: PostContent, meta } = data;
</script>

<div class="layout">
    <article class="content">
        <h1>{meta.title}</h1>
        <p class="meta">{meta.date} · {meta.description}</p>
        <div class="center">
            <a href="/blog">go back</a><!-- -
            <a href="">next one plz</a>-->
        </div>
        <br/>
        <hr />
        <PostContent />
    </article>
</div>

<style>
    .layout {
        max-width: 860px;
        margin: 0 auto;
        padding: 2rem;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }   

    .meta {
        color: #888;
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
    }

    .content :global(h2) { font-size: 1.5rem; margin-top: 2rem; }
    .content :global(h3) { font-size: 1.2rem; margin-top: 1.5rem; }
    .content :global(p)  { line-height: 1.7; color: #ccc; }
    .content :global(a.md)  { color: #7eb8f7; }

    .content :global(pre) {
        background: #1a1a1a;
        border: 1px solid #2a2a2a;
        border-radius: 6px;
        padding: 1rem;
        overflow-x: auto;
    }

    .content :global(code) {
        font-family: monospace;
        font-size: 0.9rem;
    }

    .content :global(blockquote) {
        border-left: 3px solid #444;
        padding-left: 1rem;
        color: #888;
        margin: 1rem 0;
    }
</style>