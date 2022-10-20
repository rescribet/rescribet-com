<script lang="ts">
  import Paper from '$lib/components/Paper.svelte';
  import ComposedHeader from '../ComposedHeader.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

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
    max-width: 70ch;
    min-height: 10em;
    width: min(70ch, 100%);
  }
</style>
