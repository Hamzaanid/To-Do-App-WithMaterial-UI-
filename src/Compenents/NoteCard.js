import * as React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import { blue, green } from '@mui/material/colors';


export default function NoteCard({ note, handlDelete }) {
  return (<Card sx={{ maxWidth: "100%" }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: note.status == "DO" ? green[500] : blue[500] }} aria-label="recipe">
          {note.status == "DO" ? "W" : "S"}
        </Avatar>
      }
      action={
        <IconButton aria-label="DeleteItem" onClick={() => handlDelete(note._id)}>
          <DeleteOutlined />
        </IconButton>
      }
      title={note.title}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {note.details}
      </Typography>
    </CardContent>
  </Card>);
}
