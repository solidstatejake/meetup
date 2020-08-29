<script>
  export let textarea = false;
  export let label = "";
  export let type = "";
  export let rows;
  export let required = false;
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
  if (type && rows) {
    throw new Error(
      "Input component cannot have both a rows attribute and a type attribute.\nThe rows attribute does not apply to element of type input. The type attribute does not apply to element of type textarea. You have to pick one!"
    );
  }
</script>

<!-- 
  @component
  A text input or textarea component. 
  @param string : label The label for the text input.
  @param bool : textarea Is this an input or a textarea?
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
      {required}
      {rows}
      {value}
      on:input />
    <!--
        Cannot have dynamic 'type' attr if input is two-way bound.
        The work around was to bubble input event and let value={someVar}
        where this component is consumed.
    -->
  {:else}
    <input {type} {required} {id} {value} on:input />
  {/if}

  <!-- {:else if type === 'password'}
    <input type="" {required} {id} bind:value />
  {:else if type === 'checkbox'}
    <input type="" {required} {id} bind:value />
  {:else if type === 'radio'}
    <input type="" {required} {id} bind:value />
  {:else if type === 'color'}
    <input type="" {required} {id} bind:value />
  {:else if type === 'date'}
    <input type="" {required} {id} bind:value />
  {:else if type === 'number'}
    <input type="" {required} {id} bind:value />
  {:else if type === 'range'}
    <input type="" {required} {id} bind:value />
  {:else if type === 'tel'}
    <input type="" {required} {id} bind:value />
  {:else if type === 'file'}
    <input type="" {required} {id} bind:value />
  {:else if type === 'search'}
    <input type="" {required} {id} bind:value />
  {:else if type === 'submit'}
    <input type="" {required} {id} bind:value />
  {:else if type === 'time'}
    <input type="" {required} {id} bind:value />
  {:else if type === 'week'}
    <input type="" {required} {id} bind:value /> -->
</div>

<style>
  .form-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  textarea {
    margin-left: 20px;
  }

  label {
    font-size: 1.3rem;
  }
  /*! HACK This is a hack. May have to target label for textarea w JavaScript */
  label[for="description"] {
    align-self: flex-start;
  }
</style>
