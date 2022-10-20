<script lang="ts">
  import { onMount } from 'svelte';

  import { currentThemeIndex, themes, Themes, themeSettings, type ThemeNames } from '$lib/theme';
  import Button from '$lib/components/Button.svelte';

  const options = Object.keys(Themes) as ThemeNames[];
  const itemCount = options.length;
  const itemSize = itemCount - 1;

  onMount(() => {
    if (itemCount <= 2) {
      return;
    }

    for (let i = 1; i < itemCount - 1; i++) {
      const item = document.getElementById(`era-${i}`)!;
      const test = item.getBoundingClientRect();

      item.style.position = 'absolute';
      item.style.left = `calc( 
        (100vw - 5em) / ${itemSize} * ${i} - (${test.width}px / 2)
      )`;
    }
  });

  const updateTheme = (value: ThemeNames) => () => {
    currentThemeIndex.set(options.indexOf(value));
  };
</script>

<div class="ThemeWarp">
  <input type="range" min="0" max={itemSize} step="1" bind:value={$currentThemeIndex} />
  <ul id="eras">
    {#each options as stepName, i}
      <li
        id="era-{i}"
        class="era-{i} {stepName}"
        data-attr={stepName}
        style="--body-font: {themeSettings(stepName).bodyFont}"
      >
        <Button on:click={updateTheme(stepName)}>
          {themes[stepName].name}
        </Button>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .ThemeWarp {
    display: flex;
    flex-direction: column;
    margin: 0 2em;
    min-height: 4em;

    ul {
      position: relative;
      display: inline-flex;
      justify-content: space-between;
      width: 100%;

      list-style: none;
      padding-inline-start: 0;
    }
  }
</style>
