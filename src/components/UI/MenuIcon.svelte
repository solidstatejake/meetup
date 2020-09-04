<script lang='typescript'>
  /** Indicates whether the menu containing this icon is open.  */
  export let open = false;
</script>

<!-- 
  @component
  A white, tribar menu icon.
  ## Notes
  - This icon is meant to be used in conjunction with `<Menu/>`
  - The z-index of this component is defined inside of `<Menu/>`
  - This icon transforms from the tribar to a red, underlined 'X' when `<Menu/>` is opened.
  - Sass is used (vs SCSS) in this file since there is little code to worry about formatting (formatting doesn't work in VS Code when Sass is chosen to be the styling language in Svelte components).
-->
<div class="menu-container" class:open>
  <div class="menu-bar menu-bar-1" />
  <div class="menu-bar menu-bar-2" />
  <div class="menu-bar menu-bar-3" />
</div>

<style lang="sass">
  .menu
    &-bar
      background: var(--off-white)
      border-radius: 1px
      height: 4.5px
      margin-bottom: 5px
      transform-origin: center
      transform-style: preserve-3d
      transition:
        property: background, transform, width
        duration: 300ms
        timing-function: cubic-bezier(0.37, 0.81, 0.6, 0.9)
      width: 40px
    
    &-container 
      cursor: pointer
      perspective: 50px
  
  .open 
    .menu-bar-1 
      transform: translateY(10px) rotateZ(45deg) rotateY(360deg) scale(0.6)
    .menu-bar-2 
      transform: translateY(15px) rotateY(360deg) scale(0.6)
    .menu-bar-3 
      transform: translateY(-10px) rotateZ(-45deg) rotateY(360deg) scale(0.6)
    > * 
      background: var(--danger)
</style>
