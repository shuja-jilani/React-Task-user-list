import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext } from 'react'
import UserContext from '../context/Users/userContext'
import { useState } from "react";

export default function ButtonAdd() {
  const [open, setOpen] = React.useState(false);
  const context = useContext(UserContext);
  const {addUser} = context;
  const [user, setUser] = useState({name:"", surname:""})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (e) => {
    e.preventDefault();
    addUser(user.name,user.surname);
    setOpen(false);
  };
  const onChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  };


  return (
    <div className="">
      <div>
        <Button variant="contained" onClick={handleClickOpen}>
          Add New User
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Enter your details</DialogTitle>
          <DialogContent>
            <TextField
              name="name"
              autoFocus
              margin="dense"
              id="name"
              label="First Name"
              type="text"
              fullWidth
              variant="outlined"
              onChange={onChange}
            />
            <TextField
              name="surname"
              autoFocus
              margin="dense"
              id="surname"
              label="Last Name"
              type="text"
              fullWidth
              variant="outlined"
              onChange={onChange}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
