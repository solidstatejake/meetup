<script>
	import { currentMeetup } from './../../stores.js';
  import { createEventDispatcher } from "svelte";
  import Button from "../UI/Button.svelte";

  export let title;
  export let subtitle;
  export let description;
  export let imgUrl;
  export let id;
  
  const dispatch = createEventDispatcher();

  const editMeetup = () => {
    $currentMeetup = { title, subtitle, description, imgUrl, id };
    dispatch('edit-meetup');
  }

  const destroyMeetup = () => {
    if (confirm("Are you sure you would like to delete this meetup?")) {
      dispatch("destroy-meetup", { meetupId: id });
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
      <Button
        color="danger"
        small
        circle
        icon={{ justification: 'center', label: 'btn', name: 'trash', color: '#333333' }}
        on:click={destroyMeetup}>
        Delete
      </Button>
      <Button
        color="info"
        small
        circle
        icon={{ justification: 'center', label: 'btn', name: 'pencil', color: '#333333' }}
        on:click={editMeetup}>
        Edit
      </Button>
      <Button
        color="primary"
        small
        circle
        icon={{ justification: 'center', label: 'btn', name: 'share', color: '#333333' }}>
        Share
      </Button>
    </div>

  </div>
</article>

<style type='text/sass'>
  article 
    background: var(--off-white)
    margin-bottom: 2rem
    transition: background-color 300ms cubic-bezier(0.18, 0.89, 0.32, 1.28), box-shadow 300ms cubic-bezier(0, 0.85, 0.29, 1), color 300ms cubic-bezier(0, 0.85, 0.29, 1), transform 300ms cubic-bezier(0, 0.85, 0.29, 1), width 1000ms cubic-bezier(0, 0.85, 0.29, 1)
    transform-style: preserve-3d
    width: 100%
  
  h1 
    font-size: var(--font-size-h1-sm)
    margin-bottom: 5px
  
  h3 
    font-size: var(--font-size-h3-sm)
    font-weight: lighter
  
  img 
    max-height: 324px
    width: 100%
  
  p 
    font-size: var(--font-size-p-sm)
    font-weight: 400
  
  .content 
    display: flex
    padding: 1rem
    padding-bottom: 0
    flex-direction: column
    height: 18rem
    justify-content: space-evenly
  
  .description 
    margin-top: 1rem
    line-height: 1.8rem
  
  .footer 
    align-items: center
    display: flex
    height: 100%
    justify-content: flex-end
    width: 100%
    gap: 1rem
  
  @media only screen and (min-width: 400px) 
    article 
      border-radius: 3px
      box-shadow: var(--card-shadow)
      background-color: white
      margin-bottom: 0
      width: 400px
      &:hover 
        box-shadow: var(--btn-hover-shadow)
        transform: perspective(100px) scale(1.03) translateY(-5px)
      
  @media only screen and (min-width: 880px) 
    article 
      width: 400px
  
</style>