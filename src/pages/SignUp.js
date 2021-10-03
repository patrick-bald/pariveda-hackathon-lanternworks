import React, { useState, useEffect} from 'react';
import { Grid, Paper, TextField, Button, FormControl, MenuItem, Select, InputLabel, Checkbox, ListItemText, Box } from '@material-ui/core';
import './SignUp.css';


const SignUp = () => {
    const [status, setStatus] = useState('');
    const [interest, setInterest] = useState([]);
    const [isMentor, setIsMentor] = useState(false);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const interests = [
        'Business',
        'STEM',
        'Law',
        'Medicine',
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);


    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
        if(event.target.value == "Mentor") {
            setIsMentor(true);
        } else {
            setIsMentor(false);
        }
    };

    const handleChangeInterest = (event) => {
        const {
            target: { value },
        } = event;
        setInterest(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <Grid>
            <Paper elevation={10} className="inputSignup">
                <h2> Sign Up</h2>

                <FormControl variant="standard"   >
                    <InputLabel id="demo-simple-select-standard-label">Mentor/Student</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={status}
                        onChange={handleChangeStatus}
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
                {(isMentor) && <TextField label="Occupation" placeholder="Occupation" />}
                {(!isMentor) && <TextField label="University" placeholder="University" />}

                <TextField label="Street" placeholder="Address" />
                <TextField label="City" placeholder="Address" />
                <TextField label="State" placeholder="Address" />
                <TextField label="Zip" placeholder="Address" />
                <p></p>
                <div>
                    <FormControl >
                    {(isMentor) &&<InputLabel id="demo-multiple-checkbox-label">Career Experience</InputLabel>}
                    {(!isMentor) &&<InputLabel id="demo-multiple-checkbox-label">Career Interests</InputLabel>}
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            className="form"
                            multiple
                            value={interest}
                            onChange={handleChangeInterest}

                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {interests.map((item) => (
                                <MenuItem key={item} value={item}>
                                    <Checkbox checked={interest.indexOf(item) > -1} />
                                    <ListItemText primary={item} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <p></p>
                <div>
                    <input
                        accept="image/*"
                        type="file"
                        id="select-image"
                        style={{ display: 'none' }}
                        onChange={e => setSelectedImage(e.target.files[0])}
                    />
                    <label htmlFor="select-image">
                        <Button variant="contained" component="span">
                            Upload Profile Image
                        </Button>
                    </label>
                    {imageUrl && selectedImage && (
                        <Box mt={2} textAlign="center">
                            <div>Image Preview:</div>
                            <img src={imageUrl} alt={selectedImage.name} height="100px" />
                        </Box>
                    )}

                </div>

                <p></p>
                <TextField label="Password" placeholder="Password" type='password' />
                <p></p>
                <Button variant="contained" className="button">Sign Up</Button>
            </Paper>
        </Grid>

    );
}

export default SignUp;