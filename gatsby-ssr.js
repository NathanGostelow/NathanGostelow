import React from "react";
const MagicScriptTag = () => {
    const codeToRunOnClient = `
        (function() {
                function setTheme(mode) {
                    document.documentElement.setAttribute("data-theme", mode);
                }

                var darkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;

                setTheme(darkmode ? 'dark' : 'light');
        })()
    `;
    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<MagicScriptTag />);
};
