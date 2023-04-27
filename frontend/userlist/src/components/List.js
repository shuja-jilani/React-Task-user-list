import React from 'react'
import { useContext,useEffect } from 'react'
import UserContext from '../context/Users/userContext'
import ListItem from './ListItem'

const List = () => {

    const context = useContext(UserContext);
    const {users,getUsers} = context;

    useEffect(() => {
      getUsers();
    }, [])
    

    return (
    <div>
       { users.map((user) =>{
        return <ListItem user={user} key ={user._id}/>
        })
}

    </div>
  )
}

export default List