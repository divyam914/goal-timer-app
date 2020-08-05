import React from 'react';
import Progress from './Progress';
import style from './goal.module.css';

const Goal = ( {goal} ) => {
    return (
        <div className={style.container}>
            <div className={style.name}>
                {goal.name}
            </div>
            <div className={style.progress}>
                <Progress totalTime={goal.time} />
            </div>
            
        </div>
    );
};

export default Goal