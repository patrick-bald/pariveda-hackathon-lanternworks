import React, { useState } from 'react'
// import EmployeeForm from "./EmployeeForm";
// import PageHeader from "../../components/PageHeader";
// import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Collapse, Box, Typography, Table, TableHead } from '@material-ui/core';
import useTable from "../components/useTable";
// import * as employeeService from "../../services/employeeService";
// import Controls from "../../components/controls/Controls";
// import { Search } from "@material-ui/icons";
import axios from 'axios';
const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    }
}))


const headCells = [
    { id: 'fullName', label: 'Mentor' },
    { id: 'mentees', label: 'Mentees' },
    { id: 'email', label: 'Email' },
    { id: 'occupation', label: 'Occupation' },
    { id: 'pronouns', label: 'Pronouns' },
    { id: 'backgroundCheck', label: 'Background Check' },
    { id: 'training', label: 'Training' },
]

const payload = [
    {
        "fullName": "Cayla S",
        "email": "@",
        "occupation": "Business",
        "pronouns": "she/her",
        "backgroundCheck": "",
        "experience": ["Business", "Tech"],
        "training": "",


    },
    {
        "fullName": "Rob R",
        "email": "@",
        "occupation": "Business",
        "pronouns": "he/him",
        "backgroundCheck": "Done",
        "experience": ["Law", "Tech"],
        "training": "Done",

    },
    {
        "fullName": "Patrick B",
        "email": "@",
        "occupation": "Tech",
        "pronouns": "he/him",
        "backgroundCheck": "",
        "experience": ["Business", "Tech"],
        "training": "Done",

    },
    {
        "fullName": "Chris P",
        "email": "@",
        "occupation": "Business",
        "pronouns": "he/him",
        "backgroundCheck": "Done",
        "experience": ["Business", "Healthcare"],
        "training": "",

    }
]
const mentees = [
    {
        "name" : "Sam Smith",
        "pronoun" : "they/them",
        "mentor" : "Cayla S",
        "interests" : ["Business"]
       
    },
    {
        "name" : "John Doe",
        "pronoun" : "he/him",
        "mentor" : "",
        "interests" : ["Healthcare"]
       
    },
    {
        "name" : "Jane Doe",
        "pronoun" : "she/her",
        "mentor" : "",
        "interests" : ["Tech"]
       
    }
]



export default function Admin() {



    const classes = useStyles();
    const [records, setRecords] = useState(payload);
    const [menteeForMentor, setMenteeForMentor] = useState([]);
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });
    const [open, setOpen] = React.useState(false);
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }
    const getRequest = async () => {

        // axios.get('https://q61b1ddpui.execute-api.us-east-2.amazonaws.com/beta/mentees').then(res => {
        //     console.log(res.data);
        // })
       

    }
    const handledropDownMentee = (mentor) => {
        let list = [];
        getRequest();
        for (const mentee of mentees) {
            if (mentee['mentor'] === mentor['fullName']){
                list.push(mentee);
            }else if (mentee['mentor'] === ''){
                for(const interest of mentee['interests']){
                    
                    if (mentor['experience'].includes(interest)){
                        list.push(mentee);
                        break;
                    }
                }
                
            }
        }
        setOpen(!open);
        setMenteeForMentor(list);

    }

    return (
        <>

            <Paper className={classes.pageContent}>
                {/* <EmployeeForm /> */}
                {/* <Toolbar>
                    <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                </Toolbar> */}
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                            (<TableRow key={item.id}>
                                <TableCell>{item.fullName}</TableCell>
                                <TableCell onClick={() => handledropDownMentee(item)}>Click</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.occupation}</TableCell>
                                <TableCell>{item.pronouns}</TableCell>
                                <TableCell>{item.backgroundCheck}</TableCell>
                                <TableCell>{item.training}</TableCell>
                            </TableRow>

                            )
                            )
                        }
                        <TableRow>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <Box sx={{ margin: 1 }}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        Mentees
                                    </Typography>
                                    <Table size="small" >
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Mentee</TableCell>
                                                <TableCell>Pronouns</TableCell>
                                                <TableCell>Match</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            {
                                                menteeForMentor.map(item =>
                                                (<TableRow key={item.id}>
                                                    <TableCell>{item.name}</TableCell>
                                                    <TableCell>{item.pronoun}</TableCell>
                                                    { (item.mentor === '') &&<TableCell>Possible Match</TableCell>}
                                                </TableRow>

                                                )
                                                )
                                            }

                                        </TableBody>
                                    </Table>
                                </Box>
                            </Collapse>
                        </TableRow>
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        </>
    )
}
