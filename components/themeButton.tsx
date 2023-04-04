/* eslint-disable @next/next/no-img-element */
import { useContext, useState, useEffect } from "react";

import { ThemeContext } from "@/context/themeContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import MoonIcon from "@/icons/moonIcon";
import SunIcon from "@/icons/sunIcon";

function ToggleThemeButton({ themeState, onClick }) {
  return (
    <button onClick={onClick} className="iconButton">
      {!themeState ? (
        <img src="/moon.png" alt="moon" height="50px" />
      ) : (
        <SunIcon />
      )}
      <style jsx>
        {`
          .iconButton {
            background-color: transparent;
            border: none;
            cursor: pointer;
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
