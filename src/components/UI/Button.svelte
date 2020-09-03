<script lang="typescript">
  import shortid from "shortid";
  import Icon from "svelte-awesome";
  import * as icons from "svelte-awesome/icons";

  /* HACK: Brought the Icon interface here from icon.interface.ts 
  because svelte-check was throwing an error. Obviously prefer to 
  use the type file.  */
  interface Icon {
    class?: string;
    color?: string;
    flip?: "horizontal" | "vertical";
    height?: string;
    justification: "left" | "center" | "right";
    label: string;
    name: string;
    pulse?: boolean;
    scale?: number;
    spin?: boolean;
    style?: string;
    width?: string;
  }

  export let circle = false;
  export let color: "primary" | "danger" | "info" | "success" | "warning" =
    "primary";
  export let fontSize = "";
  export let height = "";
  export let href = "";
  export let icon: Icon = {
    justification: "right",
    label: "Icon",
    name: "Icon name",
  };
  export let inline = false;
  export let inlineBlock = false;
  export let justify = "";
  export let outline = false;
  export let padding = "";
  export let pill = false;
  export let small = false;
  export let style = "";
  export let type = "button";
  export let width = "";

  const id = shortid.generate();

  const getIconStyles = () => {
    let _styles = "";
    if (icon.color) _styles += `color: ${icon.color}; `;
    if (icon.height) _styles += `height: ${icon.height}; `;
    if (icon.width) _styles += `width: ${icon.width}; `;
    if (icon.style) _styles += icon.style;
    return _styles;
  };
</script>

<!--
  @component
  # A highly customizable button. 
  - @param `center` : Apply `margin-left/margin-right: auto`.
  - @param `danger` :  For destructive actions or connotations. `background-color: var(--danger)`.
  - @param `icon` : Declare that this button will display an icon via svelte-awesome, which uses Font Awesome internally. Thus, icon names passed to this option should be camelCased versions of Font Awesome names.
  - @param `iconCenter` : Display the icon in the center. No slot is available if this option is set. See `@icon` for more details.
  - @param `iconLeft` : Display the icon on the left.  See `@icon` for more details.
  - @param `iconRight` : Display the icon on the right. See `@icon` for more details.
  - @param `inline` : `display: inline`.
  - @param `inline-block` : `display: inline-block`.
  - @param `left` : `margin-right: auto`.
  - @param `link` : Override baseline.css link color `color: var(--blue)` for non-@outline buttons. `color: white`.
  - @param `outline` : Give border and color of `var(--blue)` and background of `var(--body-bg)`.
  - @param `outline-danger` : Same as `@outline` with `var(--danger)` color-scheme.
  - @param `outline-success` : Same as `@outline` with `var(--success)` color-scheme.
  - @param `pill` : Completely round button borders
  - @param `primary` : Will apply the default `background-color: var(--blue)`.
  - @param `right` : `margin-left: auto`
  - @param `small` : Makes the button small for placement in  items such as cards. `height: 2rem`, `padding: 0 1rem`, `width: auto`.
  - @param `style` : Apply inline css to override provided style options.
  - @param `success` : For positive interactions or connotations. `background-color: var(--success)`.
  - @param `type` : The type of button (e.g. 'submit').
-->
<button
  {id}
  {type}
  class:center={justify === 'center'}
  class:circle={circle && icon.justification === 'center'}
  class:danger={!outline && color === 'danger'}
  class:has-icon={icon.name !== 'Icon name'}
  class:info={!outline && color === 'info'}
  class:inline
  class:inline-block={inlineBlock}
  class:left={justify === 'left'}
  class:link={href}
  class:outline
  class:outline-danger={outline && color === 'danger'}
  class:outline-info={outline && color === 'info'}
  class:outline-success={outline && color === 'success'}
  class:outline-warning={outline && color === 'warning'}
  class:pill
  class:primary={!outline && color === 'primary'}
  class:right={justify === 'right'}
  class:small
  class:success={!outline && color === 'success'}
  class:warning={!outline && color === 'warning'}
  style="height: {height}; width: {width}; font-size: {fontSize}; padding: {padding};
  {style}"
  on:click>
  <!-- icon.name is defaulted to 'Icon name', which is not an icon name. -->
  {#if icon.name !== 'Icon name'}
    {#if icon.justification === 'left'}
      <Icon
        data={icons[icon.name]}
        class={icon.class}
        flip={icon.flip}
        label={icon.label}
        pulse={icon.pulse}
        scale={icon.scale}
        spin={icon.spin}
        style={getIconStyles()} />
      <slot>Click me!</slot>
    {:else if icon.justification === 'center'}
      <Icon
        data={icons[icon.name]}
        class={icon.class}
        flip={icon.flip}
        label={icon.label}
        pulse={icon.pulse}
        scale={icon.scale}
        spin={icon.spin}
        style={getIconStyles()} />
    {:else if icon.justification === 'right'}
      <slot>Click me!</slot>
      <Icon
        data={icons[icon.name]}
        class={icon.class}
        flip={icon.flip}
        label={icon.label}
        pulse={icon.pulse}
        scale={icon.scale}
        spin={icon.spin}
        style={getIconStyles()} />
    {/if}
  {:else}
    <slot>Click me!</slot>
  {/if}
</button>

<style lang="scss">
  .center {
    margin-left: auto;
    margin-right: auto;
  }

  .circle {
    border-radius: 50%;
    height: var(--btn-height);
    width: var(--btn-height);
  }

  .danger {
    background-color: var(--danger);
    border-color: var(--danger);
  }

  .has-icon {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .info {
    background-color: var(--info);
    border-color: var(--info);
    text-shadow: 0 0 5px rgba(0,0,0,0.25);
  }

  .inline {
    display: inline;
    &-block {
      display: inline-block;
    }
  }

  .left {
    margin-right: auto;
  }

  .link {
    &:not(.outline),
    &:not(.outline-success),
    &:not(.outline-danger) {
      color: white;
    }

    &:hover {
      &:not(.outline),
      &:not(.outline-success),
      &:not(.outline-danger) {
        border-bottom: none;
        text-decoration: none;
      }
    }
  }

  .outline {
    background-color: var(--body-bg);
    border: 2px solid var(--blue);
    color: var(--blue);

    &-danger {
      background-color: var(--body-bg);
      border: 2px solid var(--danger);
      color: var(--danger);
    }

    &-info {
      background-color: var(--body-bg);
      border: 2px solid var(--info);
      color: var(--info);
    }

    &-success {
      background-color: var(--body-bg);
      border: 2px solid var(--success);
      color: var(--success);
    }

    &-warning {
      background-color: var(--body-bg);
      border: 2px solid var(--warning);
      color: var(--warning);
    }
  }

  .pill {
    border-radius: var(--pill-radius);
  }

  .primary {
    background-color: var(--blue);
    border-color: var(--blue);
  }

  .right {
    margin-left: auto;
  }

  .small {
    height: 2rem;
    padding: 0 1rem;
    width: auto;
  }

  .success {
    background-color: var(--success);
    border-color: var(--success);
  }

  .warning {
    background-color: var(--warning);
    border-color: var(--warning);
  }
</style>
