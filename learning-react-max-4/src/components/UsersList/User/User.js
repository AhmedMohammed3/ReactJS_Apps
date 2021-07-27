
const User = ({ user }) => {
    return (
        <span>
            {user.userName} ({user.userAge} years old)
        </span>
    );
}
export default User;