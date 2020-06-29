import React from 'react';
import containerStyles from './container.module.css';
import Nathan from '../../images/NathanGostelow.png';
const Container = () => {

    return(
        <div className={containerStyles.container}>
        
            <div className={containerStyles.main}> 
                <div className={containerStyles.header}>
                    <img 
                        className={containerStyles.nathan}
                        src={Nathan}
                        alt="Nathan Gostelow"
                    />
                    <div className={containerStyles.headerContent}>
                        <h1 className={containerStyles.headerName}>
                            Nathan Gostelow
                        </h1>
                        <p className={containerStyles.headerTitle}> Senior Frontend Engineer </p>
                        <p className={containerStyles.description}> 
                            Dissecting complicated problems /<br></br> Providing elegant solutions
                        </p>
                        <div className={containerStyles.buttonContainer}>
                            <a className={containerStyles.button} href="https://github.com/NathanGostelow"> Github </a>
                            <a className={containerStyles.button} href="https://www.linkedin.com/in/nathangostelow/"> LinkedIn</a>
                            <a className={containerStyles.button} href="https://twitter.com/nathan_MG1"> Twitter</a>
                            <a className={containerStyles.button} href="#"> Read Me...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
