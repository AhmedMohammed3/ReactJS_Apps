import { useState } from "react";
import { v4 as uuid } from 'uuid';

import './AddGoal.css';

const AddItem = (props) => {

    const [goal, setGoal] = useState('');
    const inputGoalHandler = (event) => {
        console.log(event.target.value);
        setGoal(event.target.value);
    }

    const addNewGoalHandler = (event) => {
        event.preventDefault();
        props.onAddingNewGoal({
            id: uuid(),
            text: goal
        });
    }
    return (
        <div>
            <form className="add-item" onSubmit={addNewGoalHandler}>
                <p className="add-item__label" >Course Goal</p>
                <input type="text" className="add-item__input" value={goal} onChange={inputGoalHandler} />
                <div>
                    <button className="add-item__button">Add Goal</button>
                </div>
            </form>
        </div>
    );
}

export default AddItem;