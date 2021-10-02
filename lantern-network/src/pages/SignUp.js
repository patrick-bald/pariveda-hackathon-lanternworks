import React from 'react';
import { Grid, Paper, TextField, Button, FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';
import './SignUp.css';


const SignUp = () => {
    var [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Grid>
            <Paper elevation={10} className="inputSignup">
                <h2> Sign Up</h2>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}  >
                    <InputLabel id="demo-simple-select-standard-label">Mentor/Student</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        className="form"
                        label="Mentor or Student"
                        
                    >
                        <MenuItem value={"Mentor"}>Mentor</MenuItem>
                        <MenuItem value={"Student"}>Student</MenuItem>
        
                    </Select>
                </FormControl>
                <p></p>
                <TextField label="First and Last Name" placeholder="First and Last Name" />
                <TextField label="Pronouns" placeholder="she/her he/him" />
                <TextField label="Username" placeholder="Username" />
                <TextField label="Street" placeholder="Address" />
                <TextField label="City" placeholder="Address" />
                <TextField label="State" placeholder="Address" />
                <TextField label="Zip" placeholder="Address" />

           //interests
                //picture

                <TextField label="Password" placeholder="Password" type='password' />

                <Button className="button">Sign Up</Button>
            </Paper>
        </Grid>

    );
}

export default SignUp;