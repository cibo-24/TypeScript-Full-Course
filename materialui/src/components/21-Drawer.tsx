import React, { useState } from 'react'
import { Drawer, Box, IconButton, Typography, Menu } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu"

const DrawerLesson = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
   <IconButton size='large' onClick={() => {
    setIsOpen(true)
   }}>
    <MenuIcon />
   </IconButton>
   {/* anchor ile sayfada nerede açılmasını istiyorsak seçiyoruz. default left */}
   <Drawer anchor='right' open={isOpen} onClose={() => {
    setIsOpen(false)
   }}>
    <Box>
        <Typography variant='h6' component="div" sx={{fontSize: 20, width: 200, height: 100, textAlign: "center"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad eligendi atque necessitatibus doloribus culpa tenetur minima veniam, ratione at iure debitis eaque laudantium facere sint illo explicabo, natus quis!
        </Typography>
    </Box>
   </Drawer>
   </>
  )
}

export default DrawerLesson