import { PropsWithChildren, useState, useEffect } from 'react';
import { ThemeContext } from './themeContext';

export default function ThemeProvider({ children }: PropsWithChildren<{}>) {
    const [dark, setDark] = useState(false);

    function toggleTheme() {
        setDark(!dark);
    }
    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
