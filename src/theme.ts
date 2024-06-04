import { createTheme } from '@mui/material/styles';
import { red, blue, green } from '@mui/material/colors';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: blue[500],
        },
        secondary: {
            main: green[500],
        },
        error: {
            main: red.A400,
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: blue[200],
        },
        secondary: {
            main: green[200],
        },
        error: {
            main: red[200],
        },
    },
});

export { lightTheme, darkTheme };
