import React from 'react'
import { Link, Box } from '@mui/material'

const LinkLesson = () => {
  return (
    <Box>
        <Link href="http://www.google.com" color="error">Web Siteme Git</Link>
        <Link href="http://www.google.com" sx={{fontSize: 20}}>Web Siteme Git</Link>
        <Link href="http://www.google.com" variant='body2'>Web Siteme Git</Link>
        <Link href="http://www.google.com" underline='none'>Web Siteme Git</Link>
        <Link component="button" onClick={() => {
            alert("Kenan");
            
        }}>Web Siteme Git</Link>
    </Box>
  )
}

export default LinkLesson