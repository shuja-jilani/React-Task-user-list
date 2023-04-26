import React from "react";
import UserContext from '../context/Users/userContext'
import { useContext } from 'react'


const ListItem = (props) => {
  const { user } = props;
  const context = useContext(UserContext);
  const {deleteUser} = context;
  return( 
  <div className="col-md-3 my-3">
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">{user.name} {user.surname}</h5>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Delete</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{deleteUser(user._id)}}>Save changes</button>
      </div>
    </div>
  </div>
</div>    
  </div>
</div>
  </div>

  )};

export default ListItem;
