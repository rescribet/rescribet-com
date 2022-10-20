<script lang="ts">
  import H1 from '$lib/components/H1.svelte';

  export let id: string;
</script>

<div>
  <H1 {id}><slot name="heading" /></H1>
  <slot name="content" />
</div>

<style lang="scss">
  div {
    display: inline-block;
    position: absolute;
    width: 100%;
  }
</style>
