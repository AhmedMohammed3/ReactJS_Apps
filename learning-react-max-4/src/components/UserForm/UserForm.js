import { useState, useRef } from "react";
import Wrapper from '../Helpers/Wrapper'
import styles from './UserForm.module.css'
import ErrorModal from '../ErrorModal/ErrorModal';
const UserForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const userName = nameInputRef.current.value;
        const userAge = ageInputRef.current.value;
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
        }
        else {
            props.onAddUser({ userName, userAge });
            nameInputRef.current.value = '';
            ageInputRef.current.value = '';
        }
    }
    const closeModalHandler = (event) => {
        setError(null);
    }
    return (
        <Wrapper>
            {error && <ErrorModal onClose={closeModalHandler} title={error.title} msg={error.msg} />}
            <div className={styles.userForm__}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >Username</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                        autoFocus
                    />
                    <label htmlFor="userage" >Age (Years)</label>
                    <input
                        id="userage"
                        type="number"
                        ref={ageInputRef}
                    />
                    <button type="submit">Add User</button>
                </form>
            </div>
        </Wrapper>
    );
}
export default UserForm;