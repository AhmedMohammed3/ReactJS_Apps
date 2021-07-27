import styles from './UserForm.module.css'
import { useState } from "react";
import ErrorModal from '../ErrorModal/ErrorModal';
const UserForm = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();

    const userNameChangeHandler = (event) => {
        const enteredUserName = event.target.value;
        setUserName(enteredUserName);
    }

    const userAgeChangeHandler = (event) => {
        const enteredUserAge = event.target.value;
        setUserAge(enteredUserAge);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        const userCondition = userName.trim().length === 0;
        const AgeCondition = userAge.trim().length === 0;
        if (userCondition || AgeCondition) {
            if (userCondition)
                setError({
                    title: 'Wrong Username',
                    msg: 'Username cannot be empty.'
                });
            else if (AgeCondition)
                setError({
                    title: 'Wrong Age',
                    msg: 'Age cannot be empty.'
                });
        } else if (+userAge < 1) {
            setError({
                title: 'Wrong Age',
                msg: 'Age cannot be less than 1.'
            });
            return;
        }
        props.onAddUser({ userName, userAge });
        setUserName('');
        setUserAge('');
    }
    const closeModalHandler = (event) => {
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModal onClose={closeModalHandler} title={error.title} msg={error.msg} />}
            <div className={styles.userForm__}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >Username</label>
                    <input id="username" type="text" value={userName} onChange={userNameChangeHandler} autoFocus />
                    <label htmlFor="userage" >Age (Years)</label>
                    <input id="userage" type="number" value={userAge} onChange={userAgeChangeHandler} />
                    <button type="submit">Add User</button>
                </form>
            </div>
        </div>
    );
}
export default UserForm;