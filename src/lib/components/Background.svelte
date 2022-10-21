<div class="background">
  <slot />
</div>

<style lang="scss">
  .background {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  :global(.Bootstrap) .background {
    background: linear-gradient(-45deg, #99e4af, #f4bbd1, #add6e5, #acf0e0);
    background-size: 400% 400%;
    animation: gradient 25s ease infinite;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }

  :global(.W95) .background {
    background-color: var(--color-bg-1);
  }
</style>
