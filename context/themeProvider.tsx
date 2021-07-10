import { PropsWithChildren, useState } from 'react';
import { ThemeContext } from './themeContext';

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
    const [dark, setDark] = useState(false);

    function toggleDark(dark) {
        setDark(!dark);
    }
    return (
        <ThemeContext.Provider value={{ dark, toggleDark }}>
            {children}
        </ThemeContext.Provider>
    );
}
