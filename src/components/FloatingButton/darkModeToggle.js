import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Sun from "../../../static/images/sun.svg";
import Moon from "../../../static/images/moon.svg";

const DarkModeToggle = () => {
  return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
            return (
              <div className={"floating darkmode " + theme}
                   onClick={() => {toggleTheme(theme === 'dark' ? 'light' : 'dark')}}>
                  <img src={(theme === 'dark' ? Moon : Sun)} alt="dark-mode"/>
              </div>
        )}}
      </ThemeToggler>
  )
}

export default DarkModeToggle;