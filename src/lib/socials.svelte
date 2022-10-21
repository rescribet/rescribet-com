<script>
  import { socials } from '$lib/socials';
  import { audio } from '$lib/theme';
</script>

<div class="socials">
  {#each socials as social}
    <a rel="noreferrer" href={social.href} target="_blank">
      <img src={social.image} alt={social.name} title={social.name} />
    </a>
  {/each}
  <input type="checkbox" name="audio" id="audio" bind:checked={$audio} />
  <label for="audio">
    {#if $audio}
      🔈
    {:else}
      🔇
    {/if}
  </label>
</div>

<style>
  .socials {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  .socials img {
    height: 2em;
    object-fit: contain;
    width: 2em;
  }

  input[name='audio'] {
    display: none;
  }

  label {
    font-size: 2em;
    user-select: none;
  }
</style>
