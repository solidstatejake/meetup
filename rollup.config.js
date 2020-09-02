import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import autoPreprocess from 'svelte-preprocess';
import visualizer from 'rollup-plugin-visualizer';

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {  if ( server ) server.kill( 0 ); }

  return {
    writeBundle() {
      if ( server ) return;
      server = require( 'child_process' ).spawn( 'npm', [ 'run', 'start', '--', '--dev' ], {
        stdio: [ 'ignore', 'inherit', 'inherit' ],
        shell: true
      } );
      process.on( 'SIGTERM', toExit );
      process.on( 'exit', toExit );
    }
  };
}

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'esm',
    name: 'app',
    dir: 'public/build'
  },
  plugins: [
    svelte( {
      dev: !production,
      // @ts-ignore
      css: css => { css.write( 'public/build/bundle.css' ); },
      // @ts-ignore
      preprocess: autoPreprocess()
    } ),

    /*! Uncomment this line to visualize rollup bundle */ 
    // visualizer( { open: true } ),

    resolve( {
      browser: true,
      dedupe: [ 'svelte' ],
    } ),
    commonjs(),
    !production && serve(),
    !production && livereload( 'public' ),
    production && terser(),
  ],
  watch: {
    clearScreen: false
  }
};
