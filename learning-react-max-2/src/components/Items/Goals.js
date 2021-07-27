import Goal from "./Goal/Goal";

import './Goals.css'

const Goals = (props) => {
    return (
        <div>
            {props.goals.map(goal => (
                <Goal key={goal.id} goal={goal} removeGoalHandler={props.removeGoalHandler} />
            ))}
        </div>
    );
}

export default Goals;