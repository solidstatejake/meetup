<script>
  export let open = false;
</script>

<div class="menu" class:open>
  <div class="bar bar-1" />
  <div class="bar bar-2" />
  <div class="bar bar-3" />
</div>

<style lang="scss">
  .bar {
    background: var(--off-white);
    max-height: 4.5px;
    min-height: 4.5px;
    width: 40px;
    margin-bottom: 5px;
    border-radius: 1px;
    transform-style: preserve-3d;
    transform-origin: center;
    transition: {
      property: background, transform, width;
      duration: 300ms;
      timing-function: cubic-bezier(0.37, 0.81, 0.6, 0.9);
    }
  }

  .open {
    .bar {
      &-1 {
        transform: translateY(10px) rotateZ(45deg) rotateY(360deg);
        background: var(--danger);
      }
      &-2 {
        transform: translateY(30px) rotateY(360deg);
        background: var(--danger);
      }
      &-3 {
        transform: translateY(-10px) rotateZ(-45deg) rotateY(360deg);
        background: var(--danger);
      }
    }
  }

  .menu {
    cursor: pointer;
    perspective: 50px;
  }

  /* 
    .bar-1 {
      animation: wave 500ms ease infinite alternate paused;
    }
    .bar-2 {
      animation: wave 500ms 167ms ease infinite alternate paused;
    }
    .bar-3 {
      animation: wave 500ms 334ms ease infinite alternate paused;
    }
    
  @keyframes wave {
    100% {
      transform: scale(1.3);
    }
  } */
</style>
