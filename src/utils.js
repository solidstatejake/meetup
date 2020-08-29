const $ = document;
const $$ = document.getElementById;

const getElementColor = ( id ) =>  $$( elementId ).style.backgroundColor;
  
const darkenElementProperty = ( id, prop ) => {
  $$( id ).style[ prop ] = $$( id ).style[ prop ]
}
