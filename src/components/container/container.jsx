import React from "react";
import containerStyles from "./container.module.css";
import Nathan from "../../images/NathanGostelow.png";

const Container = () => {
    const cvPdf = null;

    return (
        <div className={containerStyles.main}>
            <div className={containerStyles.header}>
                <img
                    className={containerStyles.nathan}
                    src={Nathan}
                    alt='Nathan Gostelow'
                />
                <div className={containerStyles.headerContent}>
                    <h1 className={containerStyles.headerName}>
                        Nathan Gostelow
                    </h1>
                    <p className={containerStyles.headerTitle}>
                        Senior Frontend Engineer
                    </p>
                    <div className={containerStyles.description}>
                        <span className={containerStyles.tagline}>
                            Dissecting complicated problems.
                        </span>
                        <span className={containerStyles.tagline}>
                            Providing elegant solutions.
                        </span>
                    </div>
                    <div className={containerStyles.buttonContainer}>
                        <a
                            className={containerStyles.button}
                            href='https://github.com/NathanGostelow'
                        >
                            Github
                        </a>
                        <a
                            className={containerStyles.button}
                            href='https://www.linkedin.com/in/nathangostelow/'
                        >
                            LinkedIn
                        </a>
                        <a
                            className={containerStyles.button}
                            href='https://twitter.com/nathan_MG1'
                        >
                            Twitter
                        </a>
                        {cvPdf && (
                            <a className={containerStyles.button} href='#'>
                                Read Me...
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;
