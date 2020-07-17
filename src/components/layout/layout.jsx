import React, { useEffect } from "react";
import layoutStyles from "./layout.module.css";

const Layout = ({ children }) => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;
    if (prefersDarkMode)
        document.documentElement.setAttribute("data-theme", "dark");

    useEffect(() => {
        if (!prefersDarkMode)
            document.documentElement.setAttribute("data-theme", "light");
    }, [prefersDarkMode]);

    const toggleTheme = event => {
        if (event.target.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    };

    return (
        <div className={layoutStyles.layout}>
            <label htmlFor='checkbox' className={layoutStyles.switch}>
                <input
                    onClick={toggleTheme}
                    type='checkbox'
                    id='checkbox'
                    defaultChecked={prefersDarkMode}
                />
                <div className={layoutStyles.sliderRound}></div>
            </label>
            {children}
        </div>
    );
};

export default Layout;
