<script>
  import MeetupForm from './components/Meetups/MeetupForm.svelte';
  import Modal from "./components/Meetups/Modal.svelte";
  import Footer from "./components/layout/Footer.svelte";
  import Grid from "./components/layout/Grid.svelte";
  import MeetupItem from "./components/Meetups/MeetupItem.svelte";
  import Nav from "./components/layout/Nav.svelte";
  import meetups from "./data.js";
  import { menu } from "./stores.js";

  let meetupList = meetups;
  let createMeetupModalIsOpen = true;

  const createMeetup = (event) => {
    meetupList = [event.detail.meetup, ...meetupList];
    createMeetupModalIsOpen = false;
  };

  const removeMeetup = (event) => {
    meetupList = meetupList.filter(
      (meetup) => meetup.id !== event.detail.meetupId
    );
  };

  const openCreateMeetupModal = () => {
    menu.close();
    createMeetupModalIsOpen = true;
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
