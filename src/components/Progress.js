import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FiPlay } from 'feather-icons';
import { Pause, Play } from 'react-feather';
import style from './progress.module.css';

const Progress = ( {totalTime} ) => {
    const [active, setActive] = useState(false);
    const [progress, setProgress] = useState(0);
    const [percent, setPercent] = useState(0);
    const [intervalId, setIntervalId] = useState();

    useEffect(() => {
        if (!active) {
            clearInterval(intervalId);
        } else {
            let currProgress = progress;
            const id = setInterval(() => {
                currProgress = currProgress + 1;
                if (currProgress >= totalTime) {
                    clearInterval(id);
                }
                setProgress(currProgress);
            }, 60 * 1000);
            setIntervalId(id);
        }
    }, [active]);

    useEffect(() => {
        setPercent((progress / totalTime) * 100);
    }, [progress]);

    const handleClick = () => {
        setActive(!active);   
    }

    return(
        <div className={style.progress}>
            <div className={style.container}>
                <ProgressBar variant="success" now={percent} label={`${progress}/${totalTime}`} />
            </div>
                <button
                    className={style.button}
                    onClick={handleClick}
                >{active ? <Pause /> : <Play /> }
                </button> 
        </div>
    );
};

export default Progress