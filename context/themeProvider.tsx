import { PropsWithChildren, useState } from 'react';
import { ThemeContext } from './themeContext';

export default function ThemeProvider({ children }: PropsWithChildren<{}>) {
    const [dark, setDark] = useState(false);

    function toggleTheme() {
        console.log('I was clicked');
        setDark(!dark);
    }
    console.log('dark', dark);
    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
