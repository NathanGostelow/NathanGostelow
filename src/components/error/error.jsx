import React from "react";
import errorStyles from "./error.module.css";

const Error = () => {
    return (
        <div className={errorStyles.container}>
            <div className={errorStyles.center}>
                <h1>404: NOTHING HERE</h1>
                <p>TURN BACK</p>
            </div>
        </div>
    );
};

export default Error;
