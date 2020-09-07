<script>
  /** Indicates whether the menu containing this icon is open.  */
  export let menuIsOpen = false;
</script>

<!-- 
  @component
  A white, tribar menu icon.
  ## Notes
  - This icon is meant to be used in conjunction with `<Menu/>`
  - The z-index of this component is defined inside of `<Menu/>`
  - This icon transforms from the tribar to a red, underlined 'X' when `<Menu/>` is opened.
-->
<div class="icon-container" class:menu-is-open={menuIsOpen}>
  <div class="icon-bar icon-bar-1" />
  <div class="icon-bar icon-bar-2" />
  <div class="icon-bar icon-bar-3" />
</div>

<style lang="scss">
  .icon {
    &-bar {
      background: var(--almost-white);
      border-radius: 1px;
      height: 4.5px;
      margin-bottom: 5px;
      transform-origin: center;
      transform-style: preserve-3d;
      transition: {
        property: background, transform, width;
        duration: 300ms;
        timing-function: cubic-bezier(0.37, 0.81, 0.6, 0.9);
      }
      width: 40px;
    }
    &-container {
      cursor: pointer;
      perspective: 50px;
    }
  }
  .menu-is-open {
    .icon-bar-1 {
      transform: translateY(10px) rotateZ(45deg) rotateY(360deg) scale(0.6);
    }
    .icon-bar-2 {
      transform: translateY(15px) rotateY(360deg) scale(0.6);
    }
    .icon-bar-3 {
      transform: translateY(-10px) rotateZ(-45deg) rotateY(360deg) scale(0.6);
    }
    > * {
      background: var(--danger);
    }
  }
</style>
