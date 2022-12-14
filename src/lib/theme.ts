import { derived, writable, type Writable } from 'svelte/store';
import { persistedWritable } from './persistedWritable';

export const audio = persistedWritable('audio-enabled', false);

export type ThemeNames = 'W95' | 'Bootstrap' | 'Sticker';

export interface Theme {
  class: string;
  name: string;
  settings: {
    headerFont: string;
    bodyFont: string;
    cardBackground: string;
    hoverBgColor: string;
    themeColor: string;
  };
}

export const Themes: Record<ThemeNames, ThemeNames> = {
  W95: 'W95',
  Bootstrap: 'Bootstrap',
  Sticker: 'Sticker',
} as const;

export const themes = {
  [Themes.W95]: {
    class: Themes.W95,
    name: "'95",
    settings: {
      headerFont: "'w95', 'courier', 'courier new', monospace",
      bodyFont: "'courier', 'courier new', monospace",
      cardBackground: '#cac5c5',
      hoverBgColor: 'rgb(0 0 128)',
      themeColor: 'hsl(180deg 71% 30%)',
    },
  },
  [Themes.Bootstrap]: {
    class: Themes.Bootstrap,
    name: 'Social',
    settings: {
      headerFont: 'Helvetica',
      bodyFont: 'unset',
      cardBackground: '#fffdfd',
      hoverBgColor: '#c2c2c2',
      themeColor: '#f4bbd1',
    },
  },
  [Themes.Sticker]: {
    class: Themes.Sticker,
    name: 'Sticker',
    settings: {
      headerFont: "'sticker', arial",
      bodyFont: 'unset',
      cardBackground: '#fffae5',
      hoverBgColor: '#c2c2c2',
      themeColor: '#248d83',
    },
  },
} as Record<ThemeNames, Theme>;

export const themeClass = (value: ThemeNames) => themes[value].class;

export const themeSettings = (value: ThemeNames) => themes[value].settings;

export const currentThemeIndex = writable<number>(Object.keys(themes).indexOf(Themes.Sticker));

export const currentTheme = derived<Writable<number>, ThemeNames>(
  currentThemeIndex,
  (value) => Object.keys(themes)[value] as ThemeNames,
);
