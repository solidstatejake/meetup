/**
 * An interface for the svelte-awesome Icon component.
 *
 * @remarks
 * This interface was created for use with `solidstate` Svelte components. When a user creates a `solidstate` component
 * that incorporates an icon from `svelte-awesome`, this interface defines those options which are capable of being
 * passed to said Icon. So far, this interface has only been minimally tested for use with the {@link ../components/Button.svelte | solidstateButton}.
 *
 * @param class-
 *  The CSS class names passed to the icon.
 *
 * @param color-
 *  The icon color.
 *
 * @param flip-
 *  Reflect icon `horizontal | vertical`.
 *
 * @param justification-
 *  Place icon on `left | center | right`.
 *
 * @param label-
 *  The label to display to screen readers.
 *
 * @param name-
 *  The Font-Awesome icon name in camelCase.
 *
 * @param pulse-
 *  Apply Font-Awesome pulse animation?
 *
 * @param scale-
 *  By how much should the icon be scaled?
 *
 * @param spin-
 *  Apply Font-Awesome spin animation?
 *
 * @param style-
 *  Inline-styles to be passed to the icon.
 *
 *
 */
export interface Icon {
  class?: string;
  color?: string,
  flip?: 'horizontal' | 'vertical',
  justification: 'left' | 'center' | 'right',
  label: string,
  name: string,
  pulse?: boolean,
  scale?: number,
  spin?: boolean,
  style?: string,
}