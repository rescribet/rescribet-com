<script lang="ts"></script>

<h1>
  <slot />
</h1>

<style lang="scss">
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
