import { createContext } from 'react';

const defaultThemeState = {
    dark: false,
    toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultThemeState);
