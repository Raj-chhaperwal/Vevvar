import React, { useContext } from 'react';
import { IconButton, useTheme, useMediaQuery, Menu, MenuItem, Box, Grid, Drawer } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { ColorModeContext, tokens } from "../theme";
import Home from './Home';

const Header = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "transparent" }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" component="div" sx={{ letterSpacing: '5px', color: colors.white[100] }}>
                            Vevaar
                        </Typography>
                    </Box>
                    {isMobile ? (
                        <IconButton onClick={handleMenu} sx={{ color: 'white' }}>
                            <MenuIcon sx={{ color: colors.white[100] }} />
                        </IconButton>
                    ) : (
                        <Grid container justifyContent="center" alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item >
                                <Typography
                                    color={colors.white[100]}
                                    onClick={() => (window.location.hash = 'action1')}

                                >
                                    MERGE PDF
                                </Typography></Grid>
                            <Grid item>
                                <Typography color={colors.white[100]} onClick={() => window.location.hash = "action2"}>PDF CONVERTER</Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    color={colors.white[100]}
                                    id="basic-button"
                                    aria-controls="basic-menu"
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleMenu}
                                >
                                    All TOOLS
                                </Typography>
                                <Menu
                                    color={colors.white[100]}
                                    id="basic-menu"
                                    role='button'
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={() => window.location.hash = "action3"}>Action</MenuItem>
                                    <MenuItem onClick={() => window.location.hash = "action4"}>Another action</MenuItem>
                                    <MenuItem onClick={() => window.location.hash = "action5"}>Something else here</MenuItem>
                                </Menu>
                            </Grid>
                        </Grid>
                    )}
                    <Button onClick={() => window.location.hash = "login"} sx={{ width: '80px', color: colors.primary[100] }}>Login</Button>
                    <Button onClick={() => window.location.hash = "signin"} sx={{ width: '100px', color: colors.primary[100] }}>Sign In</Button>
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === "dark" ? (
                            <LightModeOutlinedIcon />
                        ) : (
                            <DarkModeOutlinedIcon />
                        )}
                    </IconButton>
                </Toolbar>
                {isMobile && (
                    <Drawer anchor="top" open={open} onClose={handleClose}>
                        {/* Render your mobile menu content here */}
                        {/* Example: Mobile menu items */}
                        <MenuItem onClick={() => window.location.hash = "action1"}>Merge PDF</MenuItem>
                        <MenuItem onClick={() => window.location.hash = "action2"}>PDF Converter</MenuItem>
                        <MenuItem onClick={() => window.location.hash = "action3"}>Action</MenuItem>
                        <MenuItem onClick={() => window.location.hash = "action4"}>Another action</MenuItem>
                        <MenuItem onClick={() => window.location.hash = "action5"}>Something else here</MenuItem>
                        <Button color="inherit" onClick={() => window.location.hash = "login"}>Login</Button>
                        <Button color="inherit" onClick={() => window.location.hash = "signin"}>Sign In</Button>
                    </Drawer>
                )}
            </AppBar>
            <Home/>
        </>
    );
}

export default Header;

