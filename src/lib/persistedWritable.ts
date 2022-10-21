import { writable } from 'svelte/store';

export const persistedWritable = <K>(
  key: string,
  fallback: K,
  marshall = (v: K): string => JSON.stringify(v),
  unmarshall = (v: string): K => JSON.parse(v),
) => {
  const initial = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : undefined;
  const store = writable(initial ? unmarshall(initial) : fallback);

  store.subscribe((value) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, marshall(value));
    }
  });

  return store;
};
