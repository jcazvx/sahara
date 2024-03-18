import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Toolbar, IconButton, InputBase, Button, Tabs, Tab, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const handleAccountClick = () => {
        // Not sure if I want to create a separate page, so this is blank for now.
    };

    const handleOrdersClick = () => {
        navigate("/orders");
    };

    const handleCartClick = () => {
        navigate("/cart");
    };

    const handleLogoClick = () => {
        navigate("/");
    };
    
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        setSearchQuery("");
    };    

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleOnHover = () => {
        setShowDropdown(true);
    };

    const handleOffHover = () => {
        setShowDropdown(false);
    };

    return (
        <>
            <AppBar position="static" className="header">
                <Toolbar>
                    <Button color="inherit" component={Link} to="/" onClick={handleLogoClick} disableRipple className="saharaLogo">
                        <Typography variant="h3">sahara</Typography>
                    </Button>
                    <div className="searchBar">
                        <form onSubmit={handleSearchSubmit}>
                            <InputBase
                                placeholder="Search Items"
                                inputProps={{ 'aria-label': 'search' }}
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="searchInput"
                            />
                            <IconButton type="submit" aria-label="search" className="searchIcon">
                                <SearchIcon />
                            </IconButton>
                        </form>
                    </div>
                    <Button color="inherit" onClick={handleOrdersClick} disableRipple className="button">
                        Orders
                    </Button>
                    <Button color="inherit" onClick={handleCartClick} disableRipple className="button">
                        Cart
                    </Button>
                    <Button color="inherit" onClick={handleAccountClick} disableRipple onMouseEnter={handleOnHover} onMouseLeave={handleOffHover} className="button">
                        Account & Lists
                        {showDropdown && (
                            <div className="dropdownMenu">
                                <div>My Profile</div>
                                <div>My Settings</div>
                                <div>Wishlist</div>
                            </div>
                        )}
                    </Button>
                </Toolbar>
            </AppBar>
            <AppBar position="static" color="default">
                <Tabs value={null} variant="standard" centered sx={{ "& .MuiTab-root": { fontSize: "18.4px" } }}>
                    <Tab label="Home" component={Link} to="/" />
                    <Tab label="Clothing" component={Link} to="/clothing" />
                    <Tab label="Electronics" component={Link} to="/electronics" />
                    <Tab label="Outdoors" component={Link} to="/outdoors" />
                    <Tab label="Room & Kitchen" component={Link} to="/roomkitchen" />
                    <Tab label="Beauty & Personal Care" component={Link} to="/beauty" />
                    <Tab label="Toys & Games" component={Link} to="/toys" />
                    <Tab label="Health & Wellness" component={Link} to="/health" />
                </Tabs>
            </AppBar>
        </>
    );
};

export default Header;
