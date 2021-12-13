import { onDestroy } from 'svelte';
import { writable } from 'svelte/store';
import { browser } from '$app/env';

const colorSchemeQuery = '(prefers-color-scheme: dark)';
const initialValue = 'light';
const colorScheme$ = writable(initialValue);

const listener = (event: MediaQueryListEvent) => {
  colorScheme$.set(event.matches ? 'dark' : 'light');
};

export function useColorScheme() {
  if (!browser || !window.matchMedia) return colorScheme$;

  const mediaQuery = window.matchMedia(colorSchemeQuery);
  colorScheme$.set(mediaQuery.matches ? 'dark' : 'light');
  mediaQuery.addEventListener('change', listener);
  onDestroy(() => {
    mediaQuery.removeEventListener('change', listener);
  });

  return colorScheme$;
}
