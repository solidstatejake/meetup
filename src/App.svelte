<script>
  import Button from "./components/UI/Button.svelte";
  import Footer from "./components/Footer.svelte";
  import Grid from "./components/Grid.svelte";
  import Input from "./components/UI/Input.svelte";
  import MeetupItem from "./components/UI/MeetupItem.svelte";
  import Nav from "./components/Nav.svelte";
  import meetups from "./data.js";

  let title = "Title",
    subtitle = "Subtitle",
    imgUrl = "http://blasdha.io",
    email = "ssj@makewithjake.io",
    description = "Description";

  let meetupList = meetups;

  const clearInputs = () => {
    title = "";
    subtitle = "";
    imgUrl = "";
    email = "";
    description = "";
  };

  const addMeetup = () => {
    const newMeetup = { title, subtitle, imgUrl, email, description };
    meetupList = [newMeetup, ...meetupList];
    clearInputs();
  };

</script>

<Nav />

<main>
  <div class="form-container">

    <form on:submit|preventDefault={addMeetup}>
      <Input
        type="text"
        label="Title"
        required
        value={title}
        on:input={({ target }) => (title = target.value)} />
      <Input
        type="text"
        label="Subtitle"
        required
        value={subtitle}
        on:input={({ target }) => (subtitle = target.value)} />

      <Input
        type="url"
        label="Image URL"
        required
        value={imgUrl}
        on:input={({ target }) => (imgUrl = target.value)} />

      <Input
        type="email"
        label="Email"
        required
        value={email}
        on:input={({ target }) => (email = target.value)} />

      <Input
        textarea
        label="Description"
        required
        value={description}
        on:input={({ target }) => (description = target.value)} />

      <div class="btn-container">
        <Button color="danger" outline on:click={clearInputs}>Clear</Button>
        <Button color="success" outline type="submit">Submit</Button>
      </div>
    </form>

  </div>
</main>

<Grid>
  {#each meetupList as meetup (meetup)}
    <MeetupItem {...meetup} />
  {/each}
</Grid>

<Footer />

<style lang="scss">
  form {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: calc(2 * var(--nav-h));
    height: 500px;
    min-width: 300px;
  }

  .btn-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .form-container {
    display: flex;
    justify-content: center;
  }

  @media only screen and (min-width: 400px) {
    form {
      height: 400px;
      width: 400px;
    }

    .btn-container {
      justify-content: space-between;
      margin-left: auto;
      width: var(--text-area-width);
    }
  }
  @media only screen and (min-width: 500px) {
    form {
      width: 450px;
    }
  }
</style>
