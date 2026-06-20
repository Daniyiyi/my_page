import { Button } from "@mui/material";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const pages = [
    { label: 'About Me', path: '/' },
    { label: 'Experience', path: '/experience' },
    { label: 'Certifications and degrees', path: '/certifications' },
]

const theme = createTheme({
    breakpoints: {
        values: { xs: 0, sm: 480, md: 1000, lg: 1200, xl: 1536 }
    }
})

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="fixed"
                sx={{
                    left: '50%',
                    width: { xs: '100%', md: '60%' },
                    maxWidth: '100%',
                    transform: 'translateX(-50%)',
                }}

            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Danial Amirjalali
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="Open navigation menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page.label}
                                        component={Link}
                                        to={page.path}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography sx={{ textAlign: 'center', color: 'black' }}>{page.label}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="subtitle2"
                            component={Link}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexDirection: 'column',
                                alignItems: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                letterSpacing: '0.04rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Box component="span" sx={{ display: 'block' }}>Danial</Box>
                            <Box component="span" sx={{ display: 'block', fontWeight: 500 }}>Amirjalali</Box>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.label}
                                    component={Link}
                                    to={page.path}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.label}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar >
        </ThemeProvider>
    );
}

export default NavBar;
