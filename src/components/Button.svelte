<script>
  import { onMount } from "svelte";
  import shortid from "shortid";
  import chroma from "chroma-js";
  export let type = "button";
  export let href = "";
  export let pill = false;
  export let left = false;
  export let right = false;
  export let center = false;
  export let inline = false;
  export let inlineBlock = false;
  export let primary = false;
  export let danger = false;
  export let success = false;
  export let outline = false;
  export let outlineSuccess = false;
  export let outlineDanger = false;

  const id = shortid.generate();
</script>

<button
  {id}
  {type}
  class:center
  class:inline
  class:inline-block={inlineBlock}
  class:left
  class:link={href}
  class:pill
  class:right
  class:primary
  class:danger
  class:success
  class:outline
  class:outline-success={outlineSuccess}
  class:outline-danger={outlineDanger}
  on:click>
  <slot>Click me!</slot>
</button>

<style>
  .pill {
    border-radius: var(--pill-radius);
  }

  .primary {
    background-color: var(--blue);
  }

  .danger {
    background-color: var(--danger);
  }

  .success {
    background-color: var(--success);
  }

  .outline {
    background-color: var(--body-bg);
    border: 2px solid var(--blue);
    color: var(--blue);
  }

  .outline-success {
    background-color: transparent;
    border: 2px solid var(--success);
    color: var(--success);
  }

  .outline-danger {
    background-color: transparent;
    border: 2px solid var(--danger);
    color: var(--danger);
  }

  .link :not(.outline) :not(.outline-success) :not(.outline-danger) {
    color: white;
  }

  .link:hover:not(.outline) :not(.outline-success) :not(.outline-danger) {
    border-bottom: none;
    text-decoration: none;
  }

  .left {
    margin-right: auto;
  }

  .right {
    margin-left: auto;
  }

  .center {
    margin-left: auto;
    margin-right: auto;
  }

  .inline {
    display: inline;
  }

  .inline-block {
    display: inline-block;
  }
</style>
