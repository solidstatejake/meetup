<script>
  export let textarea = false;
  export let label = "";
  const id = label.split(" ").join("-").toLowerCase();
  export let value = "";
  export let type = "";
  export let rows 
  export let required = true;

  if (textarea && type) {
    throw new Error(
      `Input component cannot be both a textarea and an input (of type ${type})`
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
      {id}
      autocomplete="on"
      autocapitalize="sentences"
      name={id}
      {required}
      {rows}
      spellcheck="true"
      bind:value />
    <!-- Cannot have dynamic 'type' attr if input is two-way bound -->
  {:else if type === 'text'}
    <input type="text" {required} {id} bind:value />
  {:else if type === 'email'}
    <input type="email" {required} {id} bind:value />
  {/if}
</div>

<style>

</style>
