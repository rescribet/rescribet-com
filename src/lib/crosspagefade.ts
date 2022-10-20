// https://dev.to/buhrmi/svelte-component-transitions-5ie

import { quintOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';

export const [send, receive] = crossfade({
  duration: (d) => Math.sqrt(d * 300),
  fallback(node, params) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;

    return {
      duration: 300,
      easing: quintOut,
      css: (t) => {
        console.log('fallback');

        return `
          transform: ${transform} scale(${t});
          opacity: ${t}
        `;
      },
    };
  },
});
