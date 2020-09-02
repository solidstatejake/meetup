<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../UI/Button.svelte";
  import Input from "../UI/Input.svelte";


  let title = "Title",
    subtitle = "Subtitle",
    imgUrl = "http://fake.website.tomfoolery.co",
    email = "example@email.com",
    description = "Description";

  const dispatch = createEventDispatcher();

  const clearInputs = () => {
    title = "";
    subtitle = "";
    imgUrl = "";
    email = "";
    description = "";
  };

  const createMeetup = () => {
    const meetup = { title, subtitle, imgUrl, email, description };
    dispatch("meetup-created", {meetup});
  };

</script>

<div class="form-container">

  <form on:submit|preventDefault={createMeetup}>
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