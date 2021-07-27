import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import UserForm from './components/UserForm/UserForm';
import UserList from './components/UsersList/UserList';

const App = () => {
  const [users, setUsers] = useState([
    { id: uuid(), userName: 'Hassan', userAge: 23 },
    { id: uuid(), userName: 'Salma', userAge: 24 }]
  );

  const addUserHandler = user => {
    setUsers(prevUsers => ([
      ...prevUsers,
      { id: uuid(), ...user }
    ]))
  }
  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
};

export default App;
