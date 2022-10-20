<script lang="ts">
  import type { SkillCategory } from './+page';

  export let record: SkillCategory;
</script>

<div class="skill-category">
  <h3>{record.name}</h3>
  <ul class="skill-list">
    {#each record.skills as skill}
      <li class="skill-item">
        {@html skill.text}
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .skill-category {
    display: flex;
    flex-direction: column;
  }

  .skill-list {
    flex-grow: 1;
  }

  .skill-item {
    font-family: var(--body-font);
    list-style: none;
    padding-left: 0;

    &::before {
      content: '✓';
      margin-right: 0.4em;
      color: green;
    }

    :global(.W95) &::before {
      content: '☑';
      color: inherit;
      font-size: 1.3em;
      line-height: 1rem;
    }
  }

  :global(.W95) {
    & .skill-category {
      background-color: #c0c0c0;
      border: 6px double grey;
    }

    & h3 {
      background-color: var(--theme-hover-bg-color);
      color: white;
      font-size: 0.8em;
      padding: 0.5em 0.5em;
      margin-bottom: 0.2em;
    }

    & .skill-list {
      background-color: white;
      padding-left: 0.3em;
      margin: 0em;
    }
  }
</style>
