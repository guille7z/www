<script lang="ts">
    import figlet from "figlet";
    import font from "figlet/fonts/Slant";
    import { onMount } from "svelte";

    let { text: inputText } = $props();
    let output = $state("");

    onMount(async () => {
        figlet.parseFont("Slant", font);
        output = await figlet.text(inputText, { font: "Slant" });
    });
</script>

<pre class="figlet nosel">{output}</pre>

<!-- * btw if you wanna use this for wtv feel free to take this :D -->
