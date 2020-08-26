<script>
  import Grid from "./components/Grid.svelte";
  import MeetupItem from "./components/MeetupItem.svelte";
  import Nav from "./components/Nav.svelte";

  const imgUrl = "https://picsum.photos/400";

  const meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn web development the right way",
      description:
        "Learning web development is hard! We've all been there. At this meetup, Laff Y. Taff will show new developers the ropes.",
      imgUrl,
    },
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn web development the right way",
      description:
        "Learning web development is hard! We've all been there. At this meetup, Laff Y. Taff will show new developers the ropes.",
      imgUrl,
    },
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn web development the right way",
      description:
        "Learning web development is hard! We've all been there. At this meetup, Laff Y. Taff will show new developers the ropes.",
      imgUrl,
    },
    {
      id: "m2",
      title: "Svelte vs React",
      subtitle: "Code off!",
      description:
        "Svelters and Reactors will go head-to-head in this meeting of the frontend minds! Join us to find out who can build a Yelp replica faster.",
      imgUrl,
    },
  ];
</script>

<Nav />

<main>
  <form action="">

    <div class="form-control">
      <label for="title">Title</label>
      <input type="text" id="title" />
    </div>

    <div class="form-control">
      <label for="title">Subtitle</label>
      <input type="text" id="title" />
    </div>

    <div class="form-control">
      <label for="title">Image URL</label>
      <input type="text" id="title" />
    </div>

    <div class="form-control">
      <label for="title">Description</label>
      <textarea
        id="title"
        autocomplete="on"
        autocapitalize="sentences"
        name="description"
        required
        rows="3"
        spellcheck="true" />
    </div>

  </form>
</main>
<Grid>
  {#each meetups as meetup}
    <MeetupItem {...meetup} />
  {/each}
</Grid>

<style>

</style>
