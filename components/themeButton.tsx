import { useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import MoonIcon from '@icons/moonIcon';
import SunIcon from '@icons/sunIcon';

function ToggleThemeButton({ themeState, onClick }) {
    return (
        <button onClick={onClick} className='iconButton'>
            {themeState ? <MoonIcon /> : <SunIcon />}
            <style jsx>
                {`
                    .iconButton {
                        background-color: transparent;
                        border: none;
                    }
                `}
            </style>
        </button>
    );
}

export default function ThemeButton() {
    const { dark, toggleTheme } = useContext(ThemeContext);
    return (
        <div className='themebutton'>
            <ToggleThemeButton themeState={dark} onClick={toggleTheme} />
        </div>
    );
}
