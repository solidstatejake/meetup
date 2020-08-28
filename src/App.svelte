<script>
  import Grid from "./components/Grid.svelte";
  import Input from "./components/Input.svelte";
  import MeetupItem from "./components/MeetupItem.svelte";
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


  $: console.log(title);
  $: console.log(subtitle);
  $: console.log(imgUrl);
  $: console.log(email);
  $: console.log(description);
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

      <button type="submit">Submit</button>
    </form>

  </div>
</main>

<Grid>
  {#each meetupList as meetup (meetup)}
    <MeetupItem {...meetup} />
  {/each}
</Grid>

<style>
  button {
    margin-left: auto;
  }

  form {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: calc(2 * var(--nav-h));
    height: 400px;
    width: min-content;
  }

  .form-container {
    display: flex;
    justify-content: center;
  }
</style>
