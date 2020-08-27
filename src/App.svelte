<script>
  import Grid from "./components/Grid.svelte";
  import Input from "./components/Input.svelte";
  import MeetupItem from "./components/MeetupItem.svelte";
  import Nav from "./components/Nav.svelte";
  import meetups from "./data.js";

  let title = "Title",
    subtitle = "Subtitle",
    imgUrl = "Image URL",
    description = "Description",
    email = "Email";

  $: console.log("title", title);
</script>

<Nav />

<main>

  <form on:submit|preventDefault>
    <Input type="text" label="Title" bind:value={title} />
    <Input type="text" label="Subtitle" bind:value={subtitle} />
    <Input type="text" label="Image URL" bind:value={imgUrl} />
    <Input type="email" label="Email" bind:value={email}/>
    <Input textarea label="Description" bind:value={description} />
  </form>

</main>

<Grid>
  {#each meetups as meetup}
    <MeetupItem {...meetup} />
  {/each}
</Grid>

<style>
  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: calc(2 * var(--nav-h));
  }
</style>
