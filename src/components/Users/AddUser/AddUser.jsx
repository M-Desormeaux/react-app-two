import { Card } from "../../UI/Card/Card";
import { InputBox, InputGroup, InputLabel } from "./AddUserStyle";
import { Button } from "../../UI/Button/Button";
import { useState } from "react";

export const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  const addUserHandler = (event) => {
    event.preventDefault();

    setName("");
    setAge("");

    const snowflake = `${getRandomInt(
      1,
      new Date().getTime()
    )}${new Date().getTime()}`;

    const newUser = {
      id: snowflake,
      username: name,
      age: age,
    };

    props.onNewUser(newUser);
  };

  const setNameHandler = (event) => {
    setName(event.target.value);
  };

  const setAgeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card color="#141E61">
      <form onSubmit={addUserHandler}>
        <InputGroup>
          <InputLabel htmlFor="username">Username</InputLabel>
          <InputBox
            type="text"
            value={name}
            onChange={setNameHandler}
          />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="age">Age</InputLabel>
          <InputBox
            type="number"
            min="13"
            max="115"
            step="1"
            value={age}
            onChange={setAgeHandler}
          />
        </InputGroup>
        <Button type="submit" color="#787A91" onClick={addUserHandler} white>
          Add User
        </Button>
      </form>
    </Card>
  );
};
