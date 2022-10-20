<script>
  import logo from '$lib/themes/w95/logo.png';
  import { currentTheme } from '$lib/theme';

  import SkillCategory from './SkillCategory.svelte';
  import { skillsList } from './+page';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="hero">
    {#if $currentTheme == 'W95'}
      <h1>
        <img src={logo} alt="Rescribet" />
      </h1>
    {:else}
      <h1>Rescribet</h1>
      <p class="subheader">writing is rewriting</p>
    {/if}
  </div>

  <div class="skills">
    <h2>{skillsList.name}</h2>

    <div class="skillsList">
      {#each skillsList.categories as category}
        <SkillCategory record={category} />
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    font-size: 10em;
    /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
    margin-block-end: 0.2rem;
    width: 100%;
    margin-bottom: 6rem;
  }

  .subheader {
    font-size: 4em;
    /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
    text-align: center;
    margin-bottom: 3em;
    width: 100%;
  }

  .skills {
    display: flex;
    flex: 0.6;
    flex-direction: column;
    max-width: 48rem;
    width: 100%;
  }

  .skills h2 {
    font-size: 2em;
    /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
  }

  .skillsList {
    display: grid;
    gap: 0.5em;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  /* :global(.Bootstrap) .hero {
    background-color: slateblue;
    color: white;
    width: 98vw;
    overflow: hidden;
  } */
</style>
