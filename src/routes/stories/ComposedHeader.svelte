<script lang="ts">
  import H1 from '$lib/components/H1.svelte';
  import { currentTheme, Themes } from '$lib/theme';
  // import { receive, send } from '$lib/crosspagefade';
  import { fade } from 'svelte/transition';

  export let sup: string;

  const animationLength = {
    [Themes.W95]: 0,
    [Themes.Bootstrap]: 200,
    [Themes.Sticker]: 200,
  };
  $: duration = animationLength[$currentTheme];
</script>

<div class="wrapper">
  <div />
  <div class="container">
    <p class="sup" in:fade={{ duration }} out:fade={{ duration }}>{sup}</p>
    <h1 in:fade={{ duration }} out:fade={{ duration }}>
      <slot />
    </h1>
  </div>
  <div />
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    position: relative;
    height: 10em;
    grid-template-columns: 1fr minmax(3em, 2fr) 1fr;
  }

  .container {
    height: 10em;
    justify-self: center;
  }

  .sup {
    height: 1.2em;
    font-family: var(--body-font);

    :global(.W95) & {
      display: none;
    }
  }

  h1 {
    font-family: var(--header-font);
    line-height: 2;
    margin-bottom: 1em;

    :global(.Sticker) &,
    :global(.Bootstrap) & {
      font-size: 4em;
    }
  }
</style>
