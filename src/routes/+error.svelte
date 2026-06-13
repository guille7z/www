<script>
    import Figlet from "$lib/components/Figlet.svelte";
</script>

<div class="app-center" style="font-size: 24px;">
	<div>
        <Figlet>404</Figlet>
        <br/>
        <a href="/">* oops *</a>
	</div>
</div>

<style>
    * { color: #00ff00; }
    a:hover {
        color: #000;
        background-color: #00ff00;
    }
    /* yeah no fuck this */
</style>