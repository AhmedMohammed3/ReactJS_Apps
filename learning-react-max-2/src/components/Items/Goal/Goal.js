import './Goal.css'

const Goal = (props) => {
    const removeGoalHandler = () => {
        props.removeGoalHandler(props.goal.id)
    }
    return (
        <div onClick={removeGoalHandler}>
            {props.goal.text}
        </div>
    );
}

export default Goal;