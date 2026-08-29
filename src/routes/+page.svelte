<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte";

	let { data } = $props();
</script>


<div class="relative h-screen">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Card.Root class="min-w-250 min-h-90">
           	<Card.Header class="flex">
                <img src="https://avatars.githubusercontent.com/u/271281557?v=4" class="rounded-xl">
                <div class="ml-5 mt-1">
                    <Card.Title class="text-3xl flex ml-2">
                        guille !!
                        <Card.Description class="mt-2 ml-2.5">(he/they)</Card.Description>
                        <Card.Description class="mt-1.75 ml-1.5">
                            <a href="https://github.com/guille7z">gh</a>
                        </Card.Description>
                    </Card.Title>
                    <Card.Description class="mt-2 ml-2">i like making stuff i guess</Card.Description>
                    <Card.Title class="mt-2 text-center text-muted-foreground">
                        <Separator class="mt-5 mb-2.5"/>
                        projects i've worked on
                        <div class="grid grid-cols-2 gap-2 p-2">
                            {#each data.projects as p}
                                <ProjectCard title={p.title} description={p.description} icon={p.icon} />
                            {/each}
                        </div>
                    </Card.Title>
                </div>
           	</Card.Header>
        </Card.Root>
    </div>
</div>
