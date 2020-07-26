import React, {useState, useEffect} from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Sun from "../../static/images/sun.svg";
import Moon from "../../static/images/moon.svg";


export default function DarkmodeToggle() {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
      if(!initialized && localStorage.getItem('theme') === null)
        setInitialized(true);
    }, []);

    return (
        <ThemeToggler>
          {({ theme, toggleTheme }) => {
              if(initialized) {
                toggleTheme('light');
                theme = 'light';
                setInitialized(false);
              }

              return (
                <div className={"floating darkmode " + theme} onClick={() => {toggleTheme(theme === 'dark' ? 'light' : 'dark')}}>
                    <img src={(theme === 'dark' ? Moon : Sun)}/>
                </div>
          )}}
        </ThemeToggler>
    )
}