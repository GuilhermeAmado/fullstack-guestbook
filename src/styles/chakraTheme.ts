import { extendTheme } from '@chakra-ui/react';

export const chakraTheme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background:
          'linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C;',
        height: '100vh',
      },
    },
  },
  colors: {
    purple: {
      50: '#f3e3ff',
      100: '#d5b2ff',
      200: '#b37fff',
      300: '#8f4dff',
      400: '#681aff',
      500: '#4600e6',
      600: '#4200b4',
      700: '#370082',
      800: '#260050',
      900: '#110020',
    },
    gray: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
    blue: {
      50: '#e4ebff',
      100: '#bbcaf8',
      200: '#91acee',
      300: '#678fe6',
      400: '#3e75dd',
      500: '#2661c4',
      600: '#1b5099',
      700: '#113c6e',
      800: '#052044',
      900: '#00091c',
    },
    pink: {
      50: '#ffe4ef',
      100: '#fcb9cb',
      200: '#f48ca5',
      300: '#ed5e7b',
      400: '#e73250',
      500: '#cd1842',
      600: '#a1113d',
      700: '#730933',
      800: '#470322',
      900: '#1f000e',
    },
  },
});
