import React, { useEffect } from "react";
import layoutStyles from "./layout.module.css";

const Layout = ({ children }) => {
    const isNotSSR = !(
        typeof document !== "undefined" || typeof window !== "undefined"
    );
    console.log(isDarkMode);
    const prefersDarkMode =
        typeof window !== "undefined"
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
            : false;

    const setDarkMode = mode =>
        typeof document !== "undefined" &&
        document.documentElement.setAttribute("data-theme", mode);

    // if (prefersDarkMode) setDarkMode("dark");

    useEffect(() => {
        if (!prefersDarkMode) setDarkMode("light");
    }, [prefersDarkMode]);

    const toggleTheme = event => {
        if (event.target.checked) {
            setDarkMode("dark");
        } else {
            setDarkMode("light");
        }
    };

    return (
        <div className={layoutStyles.layout}>
            {isNotSSR && (
                <label htmlFor='checkbox' className={layoutStyles.switch}>
                    <input
                        onClick={toggleTheme}
                        type='checkbox'
                        id='checkbox'
                        defaultChecked={isDarkMode}
                    />
                    <div className={layoutStyles.sliderRound}></div>
                </label>
            )}
            {children}
        </div>
    );
};

export default Layout;
