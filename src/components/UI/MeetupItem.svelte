<script>
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";
  import shortid from "shortid";

  export let title;
  export let subtitle;
  export let description;
  export let imgUrl;
  export let id;

  const dispatch = createEventDispatcher();

  const deleteMeetup = () => {
    if (confirm("Are you sure you would like to delete this meetup?")) {
      dispatch("meetup-deleted", { meetupId: id });
    }
  };
</script>

<article {id}>
  <!-- TODO: perhaps lazy load? -->
  <div class="image">
    <img src={imgUrl} alt={title} />
  </div>

  <div class="content">

    <header>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </header>

    <div>
      <p class="description">{description}</p>
    </div>

    <div class="footer">
      <Button color="danger" small pill on:click={deleteMeetup}>Delete</Button>
      <Button color="info" small pill>Edit</Button>
      <Button color="primary" small pill>Share</Button>
    </div>

  </div>
</article>

<style lang="scss">
  article {
    background: white;
    margin-bottom: 2rem;
    width: 360px;
  }

  h1 {
    font-size: var(--font-size-h1-sm);
    margin-bottom: 5px;
  }

  h3 {
    font-size: var(--font-size-h3-sm);
    font-weight: lighter;
  }

  img {
    max-height: 324px;
    width: 100%;
  }
  p {
    font-size: var(--font-size-p-sm);
    font-weight: 400;
  }

  .content {
    display: flex;
    padding: 1rem;
    padding-bottom: 0;
    flex-direction: column;
    height: 18rem;
    justify-content: space-evenly;
  }

  .description {
    margin-top: 1rem;
    line-height: 1.8rem;
  }

  .footer {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    width: 100%;
    gap: 1rem;
  }

  .icon {
    margin-left: auto;
    margin-top: auto;
  }

  @media only screen and (min-width: 380px) {
    article {
      border-radius: 3px;
      box-shadow: var(--card-shadow);
      margin-bottom: 0;
    }
  }
  @media only screen and (min-width: 880px) {
    article {
      width: 400px;
    }
  }
</style>
