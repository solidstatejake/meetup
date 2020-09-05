import { writable } from 'svelte/store';

const createMenuState = () => {
  const { subscribe, set, update } = writable( false );

  return {
    subscribe,
    toggle: () => update( state => !state ),
    open: () => set( true ),
    close: () => set( false )
  };
};

export const currentMeetup = writable(null);
export const menu = createMenuState();