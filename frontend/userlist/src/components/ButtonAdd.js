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
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';


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
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="">
      <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          
          <Item><Button variant="contained" onClick={handleClickOpen}>
          Add New User
        </Button></Item>
        </Grid>
        
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
        </Grid>
    </Box>
      </div>
    </div>
  );
}
