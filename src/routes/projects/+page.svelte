<script lang="ts">
    import Figlet from '$lib/components/Figlet.svelte';
</script>

<title>projects</title>

<div class="center">
    <Figlet>projects</Figlet>
    <br/><br/>
    <a href="/">go home</a>
</div>

<br/><br/>

<!--
<div class="post-card">
    <h2>repo</h2>
    <p class="desc">(no description)</p>
    <br />
    <a href="https://github.com/guille7z">repo</a>
    <a href="https://demo.guille.zip">demo</a>
</div>
-->

<div class="post-card">
    <h2>keygen.mp3</h2>
    <p class="desc">(no description)</p>
    <br />
    <a href="https://github.com/guille7z/keygen.mp3">repo</a>
    <a href="https://keygen.guille.zip">demo</a>
</div>

<div class="post-card">
    <h2>web</h2>
    <p class="desc">(no description)</p>
    <br />
    <a href="https://github.com/guille7z/web">repo</a>
    <a href="/">demo</a>
</div>
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
        margin: 0 0 0 0;
        color: #aaa;
        font-size: 0.9rem;
    }

    .date {
        font-size: 0.8rem;
        color: #666;
    }
</style>