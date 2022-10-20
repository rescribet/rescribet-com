<script lang="ts"></script>

<h2>
  <slot />
</h2>

<style lang="scss">
  h2 {
    font-size: 1.7em;
    font-family: var(--header-font);
    font-size: 1em;
    line-height: 2;

    :global(.Sticker) & {
      font-size: 2em;
      color: rgb(49, 49, 49);
    }

    :global(.Bootstrap) & {
      font-size: 1.5em;
    }
  }
</style>
