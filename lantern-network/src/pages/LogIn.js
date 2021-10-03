import React from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { signIn } from '../Authorization'
import './LogIn.css';


const LogIn = () => {
  const [username, setUsername] = React.useState(); 
  const [password, setPassword] = React.useState();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }
 const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  } 

  return (
    <Grid>
        <Paper elevation={10} className="input">
           <h2> Log In</h2>
           <TextField label="Username" placeholder="Username" onInput={handleUsernameChange}/>
           <TextField label="Password" placeholder="Password" type='password' onInput={handlePasswordChange}/>
           <Button onClick={() => signIn(username,password)}>Log In</Button>
           <Button>Sign Up</Button>
        </Paper>
    </Grid>

  );
}

export default LogIn;
