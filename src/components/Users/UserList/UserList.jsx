import React from "react";
import { Card } from "../../UI/Card/Card";
import { UserListPanel, Delete, FlexWrap } from "./UserListStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const UserList = (props) => {


  const userList = props.userList.map((user) => {
    const deleteHandler = () => {
      console.log("Delete");
      props.onDelete(user.id);
    };

    return (
      <Card
        key={user.id}
        marginTop={".5rem"}
        color={"#787A91"}
        relative
        noshadow
        overflow={"true"}
      >
        <FlexWrap>
          <div>
            <h3>{user.username}</h3>
            <p>{user.age}</p>
          </div>
          <div>
            <Delete>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={deleteHandler}
                size="lg"
              />
            </Delete>
          </div>
        </FlexWrap>
      </Card>
    );
  });

  return <UserListPanel noshadow>{userList}</UserListPanel>;
};
