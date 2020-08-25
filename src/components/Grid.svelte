<style>
  main {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    place-content: center;
    place-items: center;
    margin-top: calc(var(--nav-h) * 2);
  }
</style>

<main>
  <slot />
</main>
