<script>
  import { createEventDispatcher } from "svelte";
  import { currentMeetup } from "./../../stores.js";
  import Button from "../UI/Button.svelte";
  import Input from "../UI/Input.svelte";

  /* Declarations */

  const dispatch = createEventDispatcher();
  let  { title, subtitle, imgUrl, description, id } = $currentMeetup;

  /* Functions */
  const clearInputs = () => {
    title = "";
    subtitle = "";
    imgUrl = "";
    description = "";
  };

  const editMeetup = () =>
    dispatch("meetup-edited", {
      meetup: { title, subtitle, imgUrl, description, id },
    });
</script>

<div class="form-container">
  <h2 class="form-header">Create Meetup</h2>
  <form on:submit|preventDefault={editMeetup}>
    <Input
      type="text"
      label="Title"
      placeholder="The Physics of Transistors"
      required
      value={title}
      on:input={({ target }) => (title = target.value)} />

    <Input
      type="text"
      label="Subtitle"
      placeholder="And why they can't get smaller"
      required
      value={subtitle}
      on:input={({ target }) => (subtitle = target.value)} />

    <Input
      type="url"
      label="Image URL"
      placeholder="https://some-image-url.com"
      required
      value={imgUrl}
      on:input={({ target }) => (imgUrl = target.value)} />
<!-- 
    <Input
      type="email"
      label="Email"
      placeholder="username@example.com"
      required
      value={email}
      on:input={({ target }) => (email = target.value)} />
 -->
    <Input
      textarea
      label="Description"
      placeholder="A transistor is a semiconductor device used to amplify or switch electronic signals and electrical power. It is composed of semiconductor material usually with at least three terminals for connection to an external circuit..."
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
    height: 500px;
    min-width: 300px;
  }

  .btn-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .form {
    &-container {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &-header {
      margin-bottom: 3rem;
    }
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
