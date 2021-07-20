import React from "react";
import { Card } from "../../UI/Card/Card";
import { UserListPanel } from "./UserListStyle";

export const UserList = (props) => {
  const deleteHandler = () => {
    console.log("Delete");
  };

  const userList = props.userList.map((user) => {
    return (
      <Card
        key={user.id}
        marginTop={".5rem"}
        color={"#787A91"}
        relative
        noshadow
        overflow={"true"}
      >
        <h3>{user.username}</h3>
        <p>{user.age}</p>
      </Card>
    );
  });

  return <UserListPanel noshadow>{userList}</UserListPanel>;
};
