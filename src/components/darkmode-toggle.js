import React, {useState, useEffect} from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Sun from "../../static/images/sun.svg";
import Moon from "../../static/images/moon.svg";


export default function DarkmodeToggle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if(!init && !localStorage.getItem('theme'))
      setInit(true);
  }, []);

  return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
            if(init) {
              toggleTheme('light');
              theme = 'light';
              setInit(false);
            }

            return (
              <div className={"floating darkmode " + theme} onClick={() => {toggleTheme(theme === 'dark' ? 'light' : 'dark')}}>
                  <img src={(theme === 'dark' ? Moon : Sun)}/>
              </div>
        )}}
      </ThemeToggler>
  )
}