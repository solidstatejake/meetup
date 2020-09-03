<script>
  export let label = "";
  export let placeholder = "";
  export let required = false;
  export let textarea = false;
  export let type = "";
  export let value;
  const id = label
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/\W/g, "")
    .replace("_", "");

  if (textarea && type) {
    throw new Error(
      `Input component cannot be both a textarea and an input (of type ${type}).\nYou have passed both the type attribute and the textarea attribute. Verify that you meant to do this.`
    );
  }
</script>

<!-- 
  @component
  A text input or textarea component. 

  @param label The label for the text input.
  @param textarea : Is this an input or a textarea?
  @param type : The type of the input.
  @param required : Is this input/textarea required?
  @param value : The value of the element. Meant to be bound (**not dynamically**) 
-->
<div class="form-control">
  <label for={id}>{label}</label>
  {#if textarea}
    <textarea
      autocomplete="on"
      autocapitalize="sentences"
      name={id}
      spellcheck="true"
      {id}
      {placeholder}
      {required}
      {value}
      on:input />
    <!--
        Cannot have dynamic 'type' attr if input is two-way bound.
        That is, we cannot bubble bind:value AND have {type} be dynamic.
        The work around was to bubble input event and let value={someVar}
        where this component is consumed.
    -->
  {:else}
    <input {type} {required} {id} {value} {placeholder} on:input />
  {/if}

</div>

<style lang="scss">
  input,
  textarea {
    width: 100vw;
  }

  label {
    margin-bottom: 5px;
  }

  .form-control {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  @media only screen and (min-width: 400px) {
    input,
    textarea {
      border-radius: var(--border-radius);
      width: var(--input-width);
    }

    /*! HACK This is a hack. May have to target label for textarea w JavaScript */
    label[for="description"] {
      align-self: flex-start;
    }

    .form-control {
      flex-direction: row;
    }
  }
</style>
