<script>
  import Menu from './Menu.svelte';
</script>

<nav>
  <Menu/>
  <h1>Meetup</h1>
</nav>

<style>
  nav {
    align-items: center;
    background: var(--indigo);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.26);
    color: #f2f2f2;
    display: flex;
    font-size: var(--font-size-nav-sm);
    height: var(--nav-h);
    justify-content: start;
    left: 0;
    margin-bottom: 3rem;
    position: relative;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  h1 {
    margin-left: auto;
    margin-right: auto;
  }
</style>
