import * as React from "react";
import api from "../services/serviceNote.js"
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import NoteCard from "../Compenents/NoteCard.js";

export default function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        api.getALLNotes().then((res) => {
            setNotes(res.data);
        });

    }, []);
    
    const handlDelete = (id) => {
        api.DeleteNote(id).then(() => {

            api.getALLNotes().then((res) => {
                setNotes(res.data);
            });
        })
    }

    return (<Container>
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 1, lg: 3 }}>
            {
                notes.map((note) => (
                    <Grid item key={note._id} xs={12} md={6} lg={4}>
                        <NoteCard note={note} handlDelete={handlDelete} />
                    </Grid>
                    )
                    )
            }
        </Grid>
    </Container>);
}