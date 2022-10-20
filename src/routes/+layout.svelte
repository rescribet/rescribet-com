<script lang="ts">
  import Socials from '$lib/socials.svelte';
  import { currentTheme, themeClass, themes, themeSettings } from '$lib/theme';
  import Background from '$lib/components/Background.svelte';

  import Header from './Header.svelte';
  import ThemeWarp from './ThemeWarp.svelte';
  import './styles.css';

  $: headerFont = themeSettings($currentTheme).headerFont;
  $: bodyFont = themeSettings($currentTheme).bodyFont;
  $: cardBackground = themeSettings($currentTheme).cardBackground;
  $: hoverBgColor = themeSettings($currentTheme).hoverBgColor;

  if (typeof document !== 'undefined') {
    currentTheme.subscribe((value) => {
      document.getElementsByTagName('html')[0]!.className = `${themeClass(value)}-theme`;
    });
  }
</script>

<div class="app">
  <ThemeWarp />
  <div
    class="wrapper {themes[$currentTheme].class}"
    style="--header-font: {headerFont}; --body-font: {bodyFont}; --theme-card-background: {cardBackground}; --theme-hover-bg-color: {hoverBgColor};"
  >
    <Background>
      <Header />

      <main>
        <slot />
      </main>

      <footer>
        <Socials />
        <p class="copyright">© 2022 Thom van Kalkeren</p>
      </footer>
    </Background>
  </div>
</div>

<style lang="scss">
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    position: absolute;
    width: 100%;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;

    :global(.Sticker) & {
      max-width: 76rem;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 5em;
  }

  .copyright {
    color: #5c5c5c;
    margin-top: 0.5em;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
