import React from 'react'
import { Box, IconButton, Badge, Stack } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';

const BadgeLesson = () => {
  return (
   <Stack direction="row" spacing={4}>
    <Badge badgeContent={56} max={40} color='secondary'>
        <MailIcon />
    </Badge>
   </Stack>
  )
}

export default BadgeLesson