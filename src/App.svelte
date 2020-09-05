<script>
  import EditMeetup from "./components/Meetups/EditMeetup.svelte";
  import Footer from "./components/layout/Footer.svelte";
  import Grid from "./components/layout/Grid.svelte";
  import MeetupForm from "./components/Meetups/MeetupForm.svelte";
  import MeetupItem from "./components/Meetups/MeetupItem.svelte";
  import Modal from "./components/Meetups/Modal.svelte";
  import Nav from "./components/layout/Nav.svelte";
  import { menu } from "./stores.js";
  import meetups from "./data.js";

  let meetupList = meetups;
  let createMeetupModalIsOpen = false;
  let editMeetupModalIsOpen = false;

  const createMeetup = (event) => {
    meetupList = [event.detail.meetup, ...meetupList];
    createMeetupModalIsOpen = false;
  };

  const destroyMeetup = (event) => {
    meetupList = meetupList.filter(
      (meetup) => meetup.id !== event.detail.meetupId
    );
  };

  const openCreateMeetupModal = () => {
    menu.close();
    createMeetupModalIsOpen = true;
  };

  const openEditMeetupModal = () => {
    editMeetupModalIsOpen = true;
    createMeetupModalIsOpen = false;
  };

  const editMeetup = (event) => {
    meetupList = meetupList.map((meetup) =>
      event.detail.meetup.id === meetup.id ? event.detail.meetup : meetup
    );
    editMeetupModalIsOpen = false;
  };
</script>

<!-- Meetup Modals -->
{#if createMeetupModalIsOpen}
  <Modal bind:open={createMeetupModalIsOpen}>
    <MeetupForm on:meetup-created={(e) => createMeetup(e)} />
  </Modal>
{:else if editMeetupModalIsOpen}
  <Modal bind:open={editMeetupModalIsOpen}>
    <EditMeetup on:meetup-edited={(e) => editMeetup(e)} />
  </Modal>
{/if}

<!-- Page -->
<Nav on:open-create-meetup-modal={openCreateMeetupModal} />

<Grid>
  {#each meetupList as meetup (meetup)}
    <MeetupItem
      {...meetup}
      on:destroy-meetup={destroyMeetup}
      on:edit-meetup={openEditMeetupModal} />
  {/each}
</Grid>

<Footer />
