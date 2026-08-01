<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="layout.css" />
</svelte:head>

{@render children()}
