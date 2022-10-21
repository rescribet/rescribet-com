<script lang="ts">
  import Paper from '$lib/components/Paper.svelte';
  import Metadata from '$lib/Metadata.svelte';

  import ComposedHeader from '../ComposedHeader.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <Metadata title="{data.name}, a story" path={data._id} description={data.text} />
</svelte:head>

<article>
  <div class="header-container">
    <ComposedHeader sup="Stories">{data.name}</ComposedHeader>
  </div>

  <Paper class="paper">
    <p>{data.text}</p>
  </Paper>
</article>

<style lang="scss">
  .header-container {
    position: relative;
    height: 10em;
  }

  article {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }

  p {
    font-family: var(--body-font);
    text-align: justify;
  }

  :global(.paper) {
    max-width: 80ch;
    min-height: 10em;
    width: min(80ch, 100%);
  }
</style>
