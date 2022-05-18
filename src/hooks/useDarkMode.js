import { useEffect, useState } from "react";

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const json = localStorage.getItem("shorti-dark-mode");
    const currentMode = JSON.parse(json);
    if(currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const className = "dark"
    if(darkMode) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("shorti-dark-mode", json);
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

export default useDarkMode;