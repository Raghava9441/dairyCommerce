import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#4352ff',
        },
        secondary: {
            main: '#4caf50',
        },
        error: {
            main: '#ff4d4f',
        },
    },
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root: {},
            },
        },
        MuiDialog: {},
        MuiDialogContent: {},
        MuiDialogActions: {},
        MuiDialogTitle: {},
        MuiFormControl: {
            styleOverrides: {
                root: {},
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    // backgroundColor: "black"
                },
            },
        },

        MuiFormLabel: {},
        MuiAccordion: {},
        MuiAccordionActions: {},
        MuiAccordionDetails: {},
        MuiAccordionSummary: {},
        MuiAppBar: {},
        MuiAutocomplete: {},
        MuiAvatar: {},
        MuiButton: {
            styleOverrides: {},
        },
        MuiCardActions: {},
        MuiCardContent: {},
        MuiCard: {},
        MuiInput: {
            styleOverrides: {
                root: {},
                input: {},
            },
        },
    },
    typography: {},
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#4352ff',
        },
        secondary: {
            main: '#4caf50',
        },
        error: {
            main: '#ff4d4f',
        },
    },
    components: {},
    typography: {},
});

export { lightTheme, darkTheme };
