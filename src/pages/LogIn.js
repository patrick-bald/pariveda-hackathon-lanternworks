import React from 'react';
import { useHistory } from "react-router-dom";
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import './LogIn.css';


const LogIn = () => {


    const history = useHistory();

    const routeChange = () => {
        let path = `/signup`;
        history.push(path);
    }

    return (
        <Grid>
            <Paper elevation={10} className="input">
                <h2> Log In</h2>
                <TextField label="Email" placeholder="Email" />
                <TextField label="Password" placeholder="Password" type='password' />
                <Button >Log In</Button>
                <Button onClick={routeChange}>Sign Up</Button>
            </Paper>
        </Grid>

    );
}

export default LogIn;
