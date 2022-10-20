<script lang="ts">
  import { page } from '$app/stores';
  import Socials from '$lib/socials.svelte';
  import { currentTheme, themeClass, Themes } from '$lib/theme';

  import { stories } from '$lib/stories';

  let pop: HTMLAudioElement;

  const playPop = (_: unknown) => {
    if ($currentTheme === 'W95') {
      pop.play();
    }
  };
</script>

<header>
  <nav>
    <ul>
      <li class:active={$page.url.pathname === '/'}>
        <a on:click={playPop} href="/">Home</a>
      </li>
      <li class:active={$page.url.pathname.startsWith(stories._id)}>
        <a on:click={playPop} href={stories._id}>{stories.name}</a>
      </li>
    </ul>
  </nav>

  <div class="corner">
    <Socials />
  </div>
</header>

{#if $currentTheme === Themes.W95}
  <audio src="/themes/{themeClass($currentTheme).toLowerCase()}/tab-switch.mp3" bind:this={pop} />
{/if}

<style lang="scss">
  @import '../lib/components/button.scss';

  header {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
    justify-content: space-between;
    padding: 0 2em;

    :global(.W95) & {
      background-color: #c0c0c0;
      box-shadow: -2px -2px darkgrey inset, 1px 1px white inset;
      padding: 0 0.2em 0 2em;
    }
  }

  :global(.W95) .corner {
    padding: 0.3em;
    margin: 0.1em 0;
    border: 3px grey inset;
  }

  .corner:last-of-type {
    justify-self: end;
  }

  nav {
    display: flex;
    justify-content: center;
    /* --background: rgba(255, 255, 255, 0.7); */
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;

    :global(.Sticker) &,
    :global(.Sticker) & a {
      border-radius: 0.91em;
    }

    :global(.Sticker) &:hover::before {
      background: repeating-linear-gradient(
        -45deg,
        #248d83,
        #248d83 10px,
        #236f68 10px,
        #236f68 20px
      );
      animation: scroll linear 20s infinite forwards;
      background-size: 800% 100%;
      content: '';
      width: 98%;
      position: absolute;
      bottom: 0;
      height: 7px;
    }

    :global(.W95) &:hover a,
    :global(.Boostrap) &:hover a {
      background-color: var(--theme-hover-bg-color);
      color: white;
    }
  }

  :global(.Sticker) li.active::before {
    background: repeating-linear-gradient(
      -45deg,
      #248d83,
      #248d83 10px,
      #236f68 10px,
      #236f68 20px
    );
    background-size: 800% 100%;
    content: '';
    width: 98%;
    position: absolute;
    bottom: 0;
    height: 7px;
    animation-fill-mode: forwards;
  }

  :global(.Bootstrap) li.active::before {
    --size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--color-theme-1);
  }

  :global(.W95) li.active {
    a {
      border: 3px darkgrey inset;
      background-color: darkgrey;
    }
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 400;
    font-size: 1.4rem;
    font-family: var(--header-font);
    /* letter-spacing: 0.1em; */
    text-decoration: none;

    :global(.Bootstrap) &,
    :global(.Sticker) & {
      transition: color 0.2s linear;
    }

    :global(.W95) & {
      font-size: 0.7rem;
    }
  }

  :global(.W95) a:hover,
  :global(.Bootstrap) a:hover {
    color: var(--color-theme-1);
  }
</style>
