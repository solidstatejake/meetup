<script>
  import CreateMeetupModal from "./components/containers/CreateMeetupModal.svelte";
  import Footer from "./components/containers/Footer.svelte";
  import Grid from "./components/containers/Grid.svelte";
  import MeetupItem from "./components/UI/MeetupItem.svelte";
  import Nav from "./components/containers/Nav.svelte";
  import meetups from "./data.js";
  import { menu } from "./stores.js";

  let meetupList = meetups;
  let createMeetupModalIsOpen = false;

  const addMeetup = (event) => {
    meetupList = [event.detail.meetup, ...meetupList];
  };

  const removeMeetup = (event) => {
    meetupList = meetupList.filter(
      (meetup) => meetup.id !== event.detail.meetupId
    );
  };

  const openCreateMeetupModal = () => {
    menu.close();
    createMeetupModalIsOpen = !createMeetupModalIsOpen;
  };
</script>

{#if createMeetupModalIsOpen}
  <CreateMeetupModal
    bind:open={createMeetupModalIsOpen}
    on:meetup-created={(e) => addMeetup(e)} />
{/if}

<Nav
  on:open-create-meetup-modal={openCreateMeetupModal} />

<main>
  <Grid>
    {#each meetupList as meetup (meetup)}
      <MeetupItem {...meetup} on:meetup-deleted={removeMeetup} />
    {/each}
  </Grid>
</main>

<Footer />
