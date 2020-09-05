# Meetup README

## Important Notes

1. The project is configured such that both Sass and SCSS have syntax highlighting and the project will compile. I set this up because having Sass code in a component instead of CSS or SCSS would be far easier to read. Unfortunately, when we set
  </br>

   ```html
   <style lang='sass'> /*...*/</style>
    ```

   in the Svelte component, the ability to autoformat with Prettier is lost.
  </br>
   **Thus, it is important that you use SCSS in this project if you would like to be able to format your Svelte files.**
