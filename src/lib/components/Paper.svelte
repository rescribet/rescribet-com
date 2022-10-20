<script lang="ts">
  let className: string = '';

  export { className as class };
</script>

<div class="Paper {className}">
  <slot />
</div>

<style lang="scss">
  .Paper {
    display: flex;
    flex-direction: column;
    border: 1px solid lightgrey;
    background-color: var(--theme-card-background);
    padding: 0.5em;
    position: relative;
    color: unset;

    :global(.Sticker) & {
      border: none;
      border-radius: 20px;
      box-shadow: 1.4px 2.3px 2.4px rgba(0, 0, 0, 0.017), 3.8px 6.3px 6.5px rgba(0, 0, 0, 0.025),
        9px 15.1px 15.7px rgba(0, 0, 0, 0.033), 30px 50px 52px rgba(0, 0, 0, 0.05);
      margin-bottom: 1em;

      transition: transform 0.15s cubic-bezier(0.42, 0, 0.69, 3.03), box-shadow 0.15s ease-in-out;
    }

    :global(.Sticker) &,
    :global(.Bootstrap) & {
      border-radius: 5px;
      padding: 1em;
    }

    :global(.W95) & {
      box-shadow: 0.2em 0.2em;
    }
  }

  // .text {
  //   flex: 1;
  //   font-family: var(--body-font);

  //   :global(.Sticker) & {
  //     margin-bottom: 1.2em;
  //   }
  // }
</style>
