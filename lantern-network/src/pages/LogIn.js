import React from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import './LogIn.css';


const LogIn = () => {
  return (
    <Grid>
        <Paper elevation={10} className="input">
           <h2> Log In</h2>
           <TextField label="Username" placeholder="Username"/>
           <TextField label="Password" placeholder="Password" type='password'/>
           <Button >Log In</Button>
           <Button>Sign Up</Button>
        </Paper>
    </Grid>

  );
}

export default LogIn;
