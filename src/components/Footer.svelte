<script>

</script>

<footer>
  <span class='rocket-1'>
    🚀
  </span>

  <span class='rocket-2'>
    🚀
  </span>

  <span class='rocket-3'>
    🚀
  </span>
</footer>

<style lang='sass'>
  @use 'sass:color'
  

  footer
    align-items: center
    background-color: scale-color($color: #4b30f5, $lightness: 20% ) // where --indigo: #4b30f5
    display: flex
    height: 10rem
    justify-content: space-around
    margin-top: 10rem
    width: 100%

  .rocket
    &-1
      transform: rotate(15deg)
      font-size: 2rem
    &-2
      font-size: 4rem
      transform: rotate(45deg)
      margin-bottom: 8rem
    &-3
      transform: rotate(60deg)
      font-size: 2rem

</style>