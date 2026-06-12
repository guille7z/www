<script lang="ts">
	import figlet from "figlet";
	import font from "figlet/fonts/Slant";
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	figlet.parseFont("Standard", font);

	let contenedor: HTMLDivElement | undefined = $state();
	let newText = $state("");

	$effect(() => {
		if (contenedor) {
			const originalText = contenedor.textContent?.trim() || '';
			if (originalText) { newText = figlet.textSync(originalText, {font: "Standard"}); }
		}
	});
</script>

<div bind:this={contenedor} style="display: none;">
	{@render children()}
</div>

{#if newText}
	<pre class="figlet nosel">{newText}</pre>
{/if}

<!-- 

-> tbd: change fonts in syntax (e.g. <Figlet slant>helo :3</Figlet>)

 * btw if you wanna use this for wtv feel free to take this :D

-->