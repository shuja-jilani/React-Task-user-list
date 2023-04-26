import React from "react";
import UserContext from "./userContext";
import { useState } from "react";

const UserState = (props) =>{

    const userInitial = [
        {
          "_id": "6448ec8ddab58517e711c2fc",
          "name": "shuja",
          "surname": "jilani",
          "__v": 0
        },
        {
          "_id": "6448eccedab58517e711c2fe",
          "name": "shuja",
          "surname": "jilani",
          "__v": 0
        },
        {
          "_id": "6448ed0a4bdf0b6aa7bd259b",
          "name": "shuja",
          "surname": "jilani",
          "__v": 0
        },
        {
          "_id": "6448f8e22d40149df2265ce6",
          "name": "shivam",
          "surname": "khurana",
          "__v": 0
        },
        {
          "_id": "64491970d7f64b02107bdffa",
          "name": "Aman",
          "surname": "khurana",
          "__v": 0
        }
      ]
const [users, setUsers] = useState(userInitial)

      const addUser = (name,surname) =>{
        const user =  {
            "_id": "64491970d7f64b0452107bdffa",
            "name": name,
            "surname": surname,
            "__v": 0
          } 
          setUsers(users.concat(user));
          console.log("Adding a new user");
      }
    
      const deleteUser =(id) => {
        console.log("Deleting the node with id"+id);
        const newUsers = users.filter((user)=> {return user._id!==id})
        setUsers(newUsers);

      }
      const editUser =() => {}

    return (
        <UserContext.Provider value = {{users, setUsers, addUser,deleteUser,editUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;
 