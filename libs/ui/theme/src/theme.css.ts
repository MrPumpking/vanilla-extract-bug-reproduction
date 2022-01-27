import { createTheme } from '@vanilla-extract/css';

const [themeClass, theme] = createTheme({
  colors: {
    primary: 'blue',
  },
});

export { themeClass, theme };
