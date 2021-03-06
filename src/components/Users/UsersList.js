import React from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
const UsersList = (props) => {
  if (props.users.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className={classes["users-list"]}>
      {props.users.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            placeCount={user.posts ? user.posts.length : 0}
          ></UserItem>
        );
      })}
    </ul>
  );
};

export default UsersList;
