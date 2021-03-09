import React from 'react';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#0f0a24',
  pink: '#fac0ff',

  black: '#0B0B0B',
  white: '#F0F2F3',
  whitePastel: '#bdc1c6',

  darkGrey: '#161b22',
  grey: '#303134',
  lightGrey: '#8a8a8a',
};

// #a0b7f6;
// #9aa0a6;
// #4285f4 blue
// #242021
// #bdc1c6 lg

// #a5d6ff
// #161b22
// #0d1777

const lightTheme = {
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    text: palette.purpleLight,
    button: palette.purpleDark,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

const darkTheme = {
  colors: {
    mainBackground: palette.darkGrey,
    cardPrimaryBackground: palette.grey,
    text: palette.white,
    button: palette.lightGrey,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

const ThemeContext = React.createContext(lightTheme);

export type Theme = typeof lightTheme;
export { lightTheme, darkTheme, ThemeContext };
