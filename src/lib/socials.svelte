<script>
  import { socials } from '$lib/socials';
</script>

<div class="socials">
  {#each socials as social}
    <a rel="noreferrer" href={social.href} target="_blank">
      <img src={social.image} alt={social.name} title={social.name} />
    </a>
  {/each}
</div>

<style>
  .socials {
    display: flex;
    gap: 0.5em;
  }

  .socials img {
    height: 2em;
    object-fit: contain;
    width: 2em;
  }
</style>
