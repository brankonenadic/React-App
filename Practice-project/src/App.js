import React, {useState} from 'react';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';


function App() {
  const [userslist, setUsersList] = useState([]);
const addUserHandler = (uName, uAge) => {
  setUsersList((prevUsersList) => {
    let id = Math.floor(Math.random() * 100);
    return [...prevUsersList, {key: id, name: uName, age: uAge}]
  })
}

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userslist}/>
    </div>
  );
}

export default App;
