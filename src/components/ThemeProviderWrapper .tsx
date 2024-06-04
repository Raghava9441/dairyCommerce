import { createContext, useContext, useState, ReactNode, FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './../theme';

// Define the shape of the context state
interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

// Create the context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Props type for the ThemeProviderWrapper component
interface ThemeProviderWrapperProps {
    children: ReactNode;
}

export const ThemeProviderWrapper: FC<ThemeProviderWrapperProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
export const useThemeContext = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useThemeContext must be used within a ThemeProviderWrapper');
    }
    return context;
};
