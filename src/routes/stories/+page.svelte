<script lang="ts">
  import StoryCard from './StoryCard.svelte';
  import { stories as record } from '$lib/stories';

  import ComposedHeader from './ComposedHeader.svelte';
  import Metadata from '$lib/Metadata.svelte';
</script>

<svelte:head>
  <Metadata
    title={record.name}
    path={record._id}
    description="Stories about projects and technologies I've worked on."
  />
</svelte:head>

<div>
  <ComposedHeader sup="">
    {record.name}
  </ComposedHeader>

  <div class="Stories">
    {#each record.stories as story}
      <StoryCard {story} />
    {/each}
  </div>
</div>

<style lang="scss">
  .Stories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));
    gap: 1em;

    :global(.Sticker) & {
      gap: 2em;
    }
  }
</style>
