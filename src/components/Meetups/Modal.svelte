<script>
  import { fade } from "svelte/transition";

  export let open = false;

  const close = () => (open = false);
</script>

<div class="background-cover" out:fade={{ duration: 200 }} on:click={close} />

<div class="modal" in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
  <span class="close-icon" on:click={close}>
    <div class="bar bar-1" />
    <div class="bar bar-2" />
  </span>
  <slot />
</div>

<style lang="scss">
  $modal-z-index: 999;

  .background-cover {
    background-color: rgba(0, 0, 0, 0.15);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: $modal-z-index - 1;
  }

  .bar {
    background: grey;
    border-radius: 1px;
    height: 4.5px;
    margin-bottom: 5px;
    margin-left: auto;
    transform-origin: center;
    transition: {
      duration: 300ms;
      property: background, transform;
      timing-function: cubic-bezier(0.37, 0.81, 0.6, 0.9);
    }
    width: 30px;

    &-1 {
      transform: rotateZ(45deg);
    }

    &-2 {
      transform: translateY(-10px) rotateZ(-45deg);
    }
  }

  .close-icon:hover {
    > * {
      background-color: var(--danger);
    }
  }
  
  .modal {
    background-color: white;
    box-shadow: var(--btn-hover-shadow);
    left: 50vw;
    padding: 3rem;
    position: fixed;
    top: 50vh;
    transform: translate(-50%, -50%);
    z-index: $modal-z-index;
    height: 100vh;
  }

  @media only screen and (min-width: 400px) {
    .modal { 
      height: auto;
    }
  }

</style>
