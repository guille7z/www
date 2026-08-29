<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";

    let {
        title = "",
        description = "",
        icon = "",
    }: { title?: string; description?: string; icon?: string } = $props();
</script>

<Card.Root class="mt-2.5 mr-2.5 mr-25 w-75">
  <Card.Header class="flex flex-row items-start gap-4">
    <img
        src={icon}
        alt="{title} logo"
        class="h-20 w-20 shrink-0 rounded-md object-cover"
    />
    <div class="flex flex-col gap-1">
      <Card.Title>{title}</Card.Title>
      <Card.Description>{description}</Card.Description>
    </div>
  </Card.Header>
</Card.Root>
