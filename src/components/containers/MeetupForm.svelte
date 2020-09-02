<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../UI/Button.svelte";
  import Input from "../UI/Input.svelte";

  export let title = "Title";
  export let subtitle = "Subtitle";
  export let imgUrl = "http://blasdha.io";
  export let email = "ssj@makewithjake.io";
  export let description = "Description";

  const dispatch = createEventDispatcher();

  const clearInputs = () => {
    title = "";
    subtitle = "";
    imgUrl = "";
    email = "";
    description = "";
  };
</script>

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
