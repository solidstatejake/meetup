<script>
  import Footer from "./components/containers/Footer.svelte";
  import Grid from "./components/containers/Grid.svelte";
  import MeetupForm from "./components/containers/MeetupForm.svelte";
  import MeetupItem from "./components/UI/MeetupItem.svelte";
  import Nav from "./components/containers/Nav.svelte";
  import meetups from "./data.js";

  let meetupList = meetups;

  const addMeetup = (event) => {
    meetupList = [event.detail.meetup, ...meetupList];
  };
</script>

<Nav />

<main>
  <MeetupForm on:meetup-created={(e)=>(addMeetup(e))} />

  <Grid>
    {#each meetupList as meetup (meetup)}
      <MeetupItem {...meetup} />
    {/each}
  </Grid>
</main>

<Footer />

<style lang="scss">

</style>
