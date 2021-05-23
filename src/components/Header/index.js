import React from 'react';

import { AppBar, Avatar, Toolbar, Typography } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.root} >
            <Toolbar className={classes.toolBar} >
                <Avatar className={classes.avatar} >
                    <MenuBookIcon />
                </Avatar >
                <Typography
                    component="h1"
                    variant="h5"
                    className={classes.title}
                >
                    Guestbook
                </Typography >
            </Toolbar >
        </AppBar >
    );
};

export default Header;
