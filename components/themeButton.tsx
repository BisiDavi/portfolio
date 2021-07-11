import { useContext } from 'react';
import { ThemeContext } from '@context/themeContext';
import useLocalStorage from '@hooks/useLocalStorage';
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

export default function ThemeButton({ themeState }) {
    const { dark, toggleTheme } = useContext(ThemeContext);
    const { setValue } = useLocalStorage();

    function updateTheme() {
        toggleTheme();
        setValue('theme', dark);
    }

    return (
        <div className='themebutton'>
            <ToggleThemeButton themeState={themeState} onClick={updateTheme} />
        </div>
    );
}
