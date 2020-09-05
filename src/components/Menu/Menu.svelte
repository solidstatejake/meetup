<script>
  import MenuIcon from "../menu/MenuIcon.svelte";
  import { createEventDispatcher } from "svelte";
  import { menu } from "../../stores.js";

  const dispatch = createEventDispatcher();

  const openCreateMeetupModal = () => dispatch("open-create-meetup-modal");
</script>

<span class="menu-icon" on:click={menu.toggle}>
  <MenuIcon menuIsOpen={$menu} />
</span>

<div class="menu" role="menu" class:menu-is-open={$menu}>
  <ul>
    <li class="menu-item" role="menuitem">
      <a href="#">Home</a>
    </li>
    <li class="menu-item" role="menuitem">
      <a href="#">About</a>
    </li>
    <li class="menu-item" role="menuitem">
      <a href="#">Contact</a>
    </li>
    <li class="menu-item" role="menuitem">
      <a href="#">Log in / Register</a>
    </li>
    <li class="menu-item" role="menuitem" on:click={openCreateMeetupModal}>
      <a href="#">Create Meetup</a>
    </li>
  </ul>
</div>

<style lang="scss">
  .menu {
    background-color: var(--off-white);
    color: #000;
    height: 42rem;
    left: 0;
    margin-left: -50rem;
    padding-left: 18rem;
    position: fixed;
    top: 0;
    transition: margin-left 300ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
    width: 40rem;

    &-icon {
      margin-left: 2rem;
      position: fixed;
      z-index: 4;
    }

    &-is-open {
      box-shadow: var(--btn-hover-shadow);
      margin-left: -10rem;
      z-index: 3;
    }

    &-item {
      transition: transform 100ms ease-in;
      &:hover {
        transform: scale(1.3);
      }
    }
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
</style>
