import { useContext, useState, useEffect } from "react";

import { ThemeContext } from "@/context/themeContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import MoonIcon from "@/icons/moonIcon";
import SunIcon from "@/icons/sunIcon";

function ToggleThemeButton({ themeState, onClick }) {
  return (
    <button onClick={onClick} className="iconButton">
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
  const [toggled, setToggled] = useState(null);
  const { setValue } = useLocalStorage();

  function updateTheme() {
    toggleTheme();
    setToggled(true);
  }

  useEffect(() => {
    if (toggled) {
      setValue("theme", dark);
    }
  }, [toggled, dark, setValue]);

  return (
    <div className="themebutton">
      <ToggleThemeButton themeState={themeState} onClick={updateTheme} />
    </div>
  );
}
