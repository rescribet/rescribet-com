<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { audio, currentTheme, themeClass, Themes } from '$lib/theme';
  import { scale } from 'svelte/transition';
  import { derived } from 'svelte/store';

  import type { Story } from '$lib/stories';
  import H2 from '$lib/components/H2.svelte';

  export let story: Story;

  let pop: HTMLAudioElement;

  const randomIntFromInterval = (min: number, max: number) => Math.random() * (max - min + 1) + min;

  const onHover = () => {
    if (!$audio) {
      return;
    }

    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      let cloned = pop.cloneNode(true) as HTMLAudioElement;
      cloned.fastSeek(0);
      cloned.playbackRate = randomIntFromInterval(0.9, 1.1);
      // @ts-ignore
      cloned.webkitPreservesPitch = false;
      cloned.play();
    } else {
      pop.playbackRate = randomIntFromInterval(0.9, 1.1);
      // @ts-ignore
      pop.webkitPreservesPitch = false;
      pop.preservesPitch = false;
      pop.volume = 0.2;
      pop.play();
    }
  };

  const animationLength = {
    [Themes.W95]: 0,
    [Themes.Bootstrap]: 200,
    [Themes.Sticker]: 200,
  };

  const duration = derived(currentTheme, () => animationLength[$currentTheme]);
  // $: duration = animationLength[$currentTheme];

  // const myScale = (el: HTMLElement) => scale(el, { duration: duration });
</script>

<a
  in:scale={{ duration: $duration }}
  out:scale={{ duration: $duration }}
  class="Story"
  href={story._id}
  on:mouseenter={onHover}
>
  <H2>{story.name}</H2>
  <p class="client">{story.client}</p>
  <p class="text">{story.text}</p>
  <div class="footer">
    <Button>read more ➡</Button>
  </div>
  <audio
    src="/themes/{themeClass($currentTheme).toLowerCase()}/hoverpop-short.mp3"
    bind:this={pop}
  />
</a>

<style lang="scss">
  .Story {
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

      &:hover {
        text-decoration: none;
      }
    }

    :global(.Sticker) &:hover,
    :global(.Sticker) &:focus {
      transform: scale(1.03);
      box-shadow: 2.1px 5.4px 4.1px rgba(0, 0, 0, 0.021), 5.8px 14.9px 11.3px rgba(0, 0, 0, 0.03),
        13.9px 35.9px 27.1px rgba(0, 0, 0, 0.039), 46px 119px 90px rgba(0, 0, 0, 0.06);
    }

    :global(.W95) & {
      box-shadow: 0.2em 0.2em;

      &:hover {
        box-shadow: 0.4em 0.4em;
      }
    }
  }

  .client {
    font-style: italic;
    color: grey;
    margin-bottom: 0.5em;
    font-family: var(--body-font);
  }

  .text {
    flex: 1;
    font-family: var(--body-font);

    :global(.Sticker) & {
      margin-bottom: 1.2em;
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    margin-top: 0.8em;

    :global(.Sticker) & {
      height: 1em;
    }

    :global(.Bootstrap) & {
      width: 100%;
    }

    :global(.W95) & {
      align-items: flex-end;
    }
  }
</style>
