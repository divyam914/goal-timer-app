import React, { useState } from 'react';
import style from './addGoal.module.css';

const AddGoal = ( {addGoal} ) => {

    const [goal, setGoal] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        if (!goal) return;
        addGoal(goal);
        setGoal({
            name: "",
            time: 0
        });
    };

    const handleChange = e => {
        const value = e.target.value;
        setGoal({
            ...goal,
            [e.target.name]: value
        });

    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <input
                type="text"
                className={style.input}
                value={goal.name}
                id="name"
                name="name"
                placeholder="add a new goal"
                onChange={handleChange}
            />
            <input
                type="number"
                className={style.input}
                value={goal.time}
                id="time"
                name="time"
                placeholder="x minutes to goal"
                onChange={handleChange}
            />
            <button  
                className={style.addButton}
                type="submit"
            >
            add
            </button>


        </form>
    );

};

export default AddGoal