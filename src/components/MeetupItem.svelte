<script>
  /* @typescript-eslint/ban-ts-comment */
  import Icon from "svelte-awesome";
  import { ellipsisH } from "svelte-awesome/icons";

  export let id;
  export let title;
  export let subtitle;
  export let description;
  export let imgUrl;
</script>

<article {id}>

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
      <span class="icon">
        <Icon data={ellipsisH} scale="1.8" />
      </span>
    </div>

  </div>
</article>

<style>
  article {
    background: white;
    margin-bottom: 2rem;
    width: 360px;
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

  img {
    max-height: 324px;
    width: 100%;
  }

  h1 {
    font-size: var(--font-size-h1-sm);
    margin-bottom: 5px;
  }

  h3 {
    font-size: var(--font-size-h3-sm);
    font-weight: lighter;
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
    margin-top: 2rem;
    line-height: 1.8rem;
  }

  .footer {
    display: flex;
    height: 100%;
    padding: 0 1rem;
    width: 100%;
  }

  .icon {
    margin-left: auto;
    margin-top: auto;
  }
</style>
