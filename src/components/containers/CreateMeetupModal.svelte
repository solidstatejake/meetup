<script>
  import { fade } from "svelte/transition";
  import MeetupForm from "./MeetupForm.svelte";

  export let open = false;
</script>

<div
  class="background-cover"
  out:fade={{ duration: 200 }}
  on:click={() => (open = false)} />

<div class="modal" in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
  <MeetupForm on:meetup-created />
</div>

<style lang="scss">
  .background-cover {
    background-color: rgba(0, 0, 0, 0.15);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 998;
  }

  .modal {
    background-color: var(--off-white);
    box-shadow: var(--btn-hover-shadow);
    left: 50vw;
    padding: 3rem;
    position: fixed;
    top: 50vh;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
</style>
