<main id="grid">
  <slot />
</main>

<style lang="scss">
  /* TODO: Configure the grid to properly render... the grid. */
  main {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    place-content: center;
    place-items: center;
    margin-top: calc(var(--nav-h) * 2);
  }

  @media only screen and (min-width: 880px) {
    main {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
  }
</style>
