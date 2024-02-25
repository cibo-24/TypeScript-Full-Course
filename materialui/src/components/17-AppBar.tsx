import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from "@mui/material"
import AppsIcon from '@mui/icons-material/Apps';
import './style.css';
import React, { useState } from "react";

const AppBarLesson = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openControl = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }
    return (
        <AppBar className="appbar">
            <Toolbar>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Typography variant="h6" component="div" className="typo">
                    Navbar Örneği
                </Typography>
                <Stack direction="row" component="div" className="Stack">
                    <Button sx={{ color: "white" }}>Anasayfa</Button>
                    <Button sx={{ color: "white" }}>Hakkımızda</Button>
                    <Button sx={{ color: "white" }}>Ürünler</Button>
                    <Button sx={{ color: "white" }}>Fiyatlar</Button>
                    <Button sx={{ color: "white" }} onClick={handleClick}>İndirimler</Button>
                </Stack>
                {/* anchorEl, componentin nerde kullanacağını. open ise açılış ve kapanışını yapar. onClose ise kapatmaya yarar. */}
                <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Kitaplar</MenuItem>
                    <MenuItem onClick={handleClose}>Defterler</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default AppBarLesson