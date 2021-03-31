import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import Sun from "static/images/sun.svg";
import Moon from "static/images/moon.svg";

interface ThemeTogglerProps {
    theme: "dark" | "light";
    toggleTheme: (theme: string) => void;
}

const DarkModeToggle: React.FC = () => (
    <ThemeToggler>
        {({ theme, toggleTheme }: ThemeTogglerProps) => (
            <div
                className={"floating darkmode " + theme}
                onClick={() => {
                    toggleTheme(theme === "dark" ? "light" : "dark");
                }}
            >
                <img src={theme === "dark" ? Moon : Sun} alt="dark-mode" />
            </div>
        )}
    </ThemeToggler>
);

export default DarkModeToggle;
