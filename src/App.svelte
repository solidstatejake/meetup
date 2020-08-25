<script>
  import Grid from './components/Grid.svelte'
  import MeetupItem from './components/MeetupItem.svelte';
  import Nav from './components/Nav.svelte';

  const imgUrl = 'https://picsum.photos/400';

  const meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn web development the right way',
      description:
        "Learning web development is hard! We've all been there. At this meetup, Laff Y. Taff will show new developers the ropes.",
      imgUrl
    }, {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn web development the right way',
      description:
        "Learning web development is hard! We've all been there. At this meetup, Laff Y. Taff will show new developers the ropes.",
      imgUrl
    }, {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn web development the right way',
      description:
        "Learning web development is hard! We've all been there. At this meetup, Laff Y. Taff will show new developers the ropes.",
      imgUrl
    },
    {
      id: 'm2',
      title: 'Svelte vs React',
      subtitle: 'Code off!',
      description:
        'Svelters and Reactors will go head-to-head in this meeting of the frontend minds! Join us to find out who can build a Yelp replica faster.',
      imgUrl
    }];
</script>

<style>
</style>

<Nav />

<Grid>
  {#each meetups as meetup}
    <MeetupItem {...meetup} />
  {/each}
</Grid>
