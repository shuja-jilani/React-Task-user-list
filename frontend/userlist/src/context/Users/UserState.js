import React from "react";
import UserContext from "./userContext";
import { useState, useEffect } from "react";

const UserState = (props) => {
  const host = "http://localhost:5000";
  const userInitial = [];
  const [users, setUsers] = useState(userInitial);

  const getUsers = async () => {
    //API CALL
    const response = await fetch(`${host}/api/list/getallusers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    setUsers(json);
  };

  const addUser = async (name, surname) => {
    //API CALL
    const res = await fetch(`${host}/api/list/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, surname }),
    })
    const response = await res.json();
   
    //   console.log(user._id);
    //   setUsers(users.concat(response));
    //   console.log("Adding a new user");
    
    //     var user ={};
    // setTimeout(() => {

    // }, 1000);
       setTimeout(() => {
        console.log(response._id);
        setUsers(users.concat(response));
        console.log("Adding a new user");
       }, 3000);
  };

  const deleteUser = async (id) => {
    //API CALL
    const response = await fetch(`${host}/api/list/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = response.json();
      const newUsers = users.filter((user)=> {return user._id !== id})
      setUsers(newUsers);
    // console.log(json);
    console.log("Deleting user with id " + id);
  };

  const editUser = async (id, name, surname) => {
    //API CALL
    const response = await fetch(`${host}/api/list/updateuser/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, surname }),
    });
    const json = response.json();

    //LOGIC TO EDIT IN CLIENT
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      if (element._id === id) {
        element.name = name;
        element.surname = surname;
      }
    }
  };

  return (
    <UserContext.Provider
      value={{ users, getUsers, setUsers, addUser, deleteUser, editUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
