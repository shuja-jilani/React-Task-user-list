import React from "react";
// import UserContext from '../context/Users/userContext'
// import { useContext } from 'react'
import DeleteButton from "./DeleteButton";


const ListItem = (props) => {
  const { user } = props;
//   const context = useContext(UserContext);
//   const {deleteUser} = context;

  return( 
  <div className="col-md-3 my-3">
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">{user.name} {user.surname}</h5>
    <DeleteButton user={props.user} key={user._id}/>
   
  </div>
</div>
  </div>

  )

};

export default ListItem;
