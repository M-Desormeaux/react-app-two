import { AppCenter, AppWrapper, GlobalStyle } from "./AppStyle";
import { AddUser } from "./components/Users/AddUser/AddUser";
import { useState } from "react";
import { UserList } from "./components/Users/UserList/UserList";

// TODO: Add User component with name and age variables
// TODO: Add Error component which pops up when data is not of the right type

function App() {
  const [users, setUsers] = useState([]);

  const newUserHandler = (newUser) => {
    setUsers([...users, newUser]);
  };

  const onDeleteUser = (TargetID) => {
    setUsers((allUsers) => {
      const updatedUsers = allUsers.filter((target) => target.id !== TargetID);
      return updatedUsers;

    });
  };

  return (
    <AppWrapper>
      <AppCenter>
        <GlobalStyle />
        <AddUser onNewUser={newUserHandler} />
        {users.length > 0 && (
          <UserList userList={users} onDelete={onDeleteUser} />
        )}
      </AppCenter>
    </AppWrapper>
  );
}

export default App;
