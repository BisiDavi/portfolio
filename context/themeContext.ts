import { createContext, PropsWithChildren } from 'react';

const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white',
    },
    light: {
        backgroundColor: 'white',
        color: 'black',
    },
};

const defaultThemeState = {
    dark: false,
    toggleDark: (dark: boolean) => {},
};

export const ThemeContext = createContext(defaultThemeState);
