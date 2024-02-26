import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '../App.css';

const PaperLesson = () => {
  return (
   <Box sx={{
    display: "flex",
    flexWrap: "wrap",
    '& > :not(style)': {
        m: 1,
        width: 128,
        height: 128,
    },
   }}>
    <Paper elevation={10}/>
    <Paper elevation={5}/>
    <Paper elevation={2}/>
    <Paper elevation={1} className='paper'>kenan</Paper>
    <Paper variant='outlined' square></Paper>
   </Box>
  )
}

export default PaperLesson