import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import Sun from "static/images/sun.svg";
import Moon from "static/images/moon.svg";

enum Theme {
    DARK = "dark",
    LIGHT = "light"
}

interface ThemeTogglerProps {
    theme: Theme;
    toggleTheme: (theme: string) => void;
}

const DarkModeToggle: React.FC = () => (
    <ThemeToggler>
        {({ theme, toggleTheme }: ThemeTogglerProps) => (
            <div
                className={"floating darkmode " + theme}
                onClick={() => {
                    toggleTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
                }}
            >
                <img src={theme === Theme.DARK ? Moon : Sun} alt="dark-mode" />
            </div>
        )}
    </ThemeToggler>
);

export default DarkModeToggle;
