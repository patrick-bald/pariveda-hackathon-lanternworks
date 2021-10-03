import React from 'react';
import { useHistory } from "react-router-dom";
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { signIn } from '../Authorization'
import './LogIn.css';


const LogIn = () => {
  const history = useHistory();
  const [username, setUsername] = React.useState(); 
  const [password, setPassword] = React.useState();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }
 const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  } 

  const routeChange = () => {
      let path = `/signup`;
      history.push(path);
  }


  return (
    <Grid>
        <Paper elevation={10} className="input">
           <h2> Log In</h2>
           <TextField label="Username" placeholder="Username" onInput={handleUsernameChange}/>
           <TextField label="Password" placeholder="Password" type='password' onInput={handlePasswordChange}/>
           <Button onClick={() => signIn(username,password)}>Log In</Button>
           <Button onClick={routeChange}>Sign Up</Button>
        </Paper>
    </Grid>

  );
}

export default LogIn;
