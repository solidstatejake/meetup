<script>
	import MenuIcon from '../UI/MenuIcon.svelte';

  let open = false;
  const toggleMenu = () => {
    open = !open
  };
</script>

<span class='hamburger' class:hamburger-open={open} on:click={toggleMenu}>
  <MenuIcon {open} />
</span>

<div class='menu' role='menu' class:open>
  <ul>
    <li class='menu-item' role='menuitem'><a href='#'>Home</a></li>
    <li class='menu-item' role='menuitem'><a href='#'>About</a></li>
    <li class='menu-item' role='menuitem'><a href='#'>Contact</a></li>
    <li class='menu-item' role='menuitem'><a href='#'>Log in / Register</a></li>
    <li class='menu-item' role='menuitem'><a href='#'>Create Meetup</a></li>
  </ul>
</div>

  
<style lang="scss">
  .hamburger {
    color: white;
    cursor: pointer;
    font-size: 3rem;
    margin-left: 2rem;
    position: absolute;
    transition: color 300ms ease;

    &-open {
      color: var(--danger);
      z-index: 999;
    }
  }

  .menu {
    background-color: var(--off-white);
  color: #000;
  height: 42rem;
  left: 0;
  margin-left: -50rem;
  padding-left: 18rem;
  position: absolute;
  top: 0;
  transition: all 300ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  width: 40rem;
  }

  ul {
    align-items: start;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
    justify-content: center;
    list-style: none;
  }

  .open {
    box-shadow: var(--btn-hover-shadow);
    margin-left: -10rem;
    z-index: 3;
  }

</style>