<script>
  export let id;
  export let title;
  export let subtitle;
  export let description;
  export let imgUrl;
</script>

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
    flex-direction: column;
    height: 18rem;
    justify-content: space-evenly;
  }

  .footer {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
</style>

<article>

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
      
    </div>

  </div>
</article>
