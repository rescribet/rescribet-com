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
  .skill-list {
    padding-left: 0.3em;
  }

  .skill-item {
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
</style>
