import User from './User/User';
import styles from './UserList.module.css';

const UserList = ({ users }) => {
    return (
        <div className={styles.userList__}>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <User user={user} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default UserList;