import React from 'react';
import api from "../services/serviceNote.js"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from 'tss-react/mui';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import { FormControlLabel, RadioGroup } from '@mui/material';

const useStyles = makeStyles(() => {
    
    return {
        btn: {
            backgroundColor: 'violet',
            fontSize: 60,
            '&:hover': {
                backgroundColor: 'blue',
            }
        }
    }
});

export default function CustomizedInputBase() {
    const navigate = useNavigate()
    const classes = useStyles();
    const [title,setTitle] = useState('');
    const [Details,setDetails] = useState('');
    const [Category,setCategory] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(title && Details && Category){
            const note = {
                title : title,
                details:Details,
                status:Category
            }
            api.AddNote(note).then((res)=> navigate('/listes') );
        }   
    }

    return (
        <Container>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>
            <Box
                component="form"
                sx={{
                    //'& > :not(style)': { m: 1, width: '60%' },
                    '.MuiTextField-root': { m: 1, width: '90%' },
                    '.MuiButton-root': { m: 1, width: '25%' },
                    '.MuiFormGroup-root': {p:2},
                    '.MuiButton-endIcon':{m:1},
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    onChange={(e)=>{setTitle(e.target.value)}}
                    label='Note Title'
                    color='secondary'
                    variant='outlined'
                    fullWidth
                    required
                ></TextField>
                <TextField
                    onChange={(e)=>{setDetails(e.target.value)}}
                    label='Details'
                    color='secondary'
                    variant='outlined'
                    multiline
                    rows={4}
                    fullWidth
                    required
                ></TextField>
                <RadioGroup value={Category} onChange={(e)=>{setCategory(e.target.value)}}>
                    <FormControlLabel value='DO' control={<Radio />} label='Work'/>
                    <FormControlLabel value='NO' control={<Radio />} label='Study'/>
                </RadioGroup>
                <Button
                    className={classes.btn}
                    type='submit'
                    color='secondary'
                    variant='contained'
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>
            </Box>

        </Container>
    );
}