import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import logo from './Components/Images/DBSlogo2.png';

function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" className="navbar-appbar">
            <Toolbar className="navbar-toolbar">
                <Link to="/" className="navbar-link">
                    <img src={logo} alt="Institute Logo" className="navbar-logo" />
                </Link>
                
                <div className="desktop-menu">
                    <Link to="/Home" className="nav-link">Home</Link>
                    <Link to="/AboutUs" className="nav-link">About Us</Link>
                    <Link to="/Courses" className="nav-link">Courses</Link>
                    <Link to="/NewBatches" className="nav-link">New Batches</Link>
                    <Link to="/Blogs" className="nav-link">Blogs</Link>
                    <Link to="/ContactUs" className="nav-link">Contact Us</Link>
                </div>

                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenuOpen}
                    className="mobile-menu-icon"
                >
                    <MenuIcon />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose} component={Link} to="/Home">Home</MenuItem>
                    <MenuItem onClick={handleMenuClose} component={Link} to="/AboutUs">About Us</MenuItem>
                    <MenuItem onClick={handleMenuClose} component={Link} to="/Courses">Courses</MenuItem>
                    <MenuItem onClick={handleMenuClose} component={Link} to="/NewBatches">New Batches</MenuItem>
                    <MenuItem onClick={handleMenuClose} component={Link} to="/Blogs">Blogs</MenuItem>
                    <MenuItem onClick={handleMenuClose} component={Link} to="/ContactUs">Contact Us</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
