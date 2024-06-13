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
        MuiSelect: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    '&:hover': {
                        backgroundColor: 'transparent',

                    },
                    '&:active': {
                        backgroundColor: 'transparent',
                    },
                    '& fieldset': {
                        borderBottom: 'none', 
                    },
                },
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
