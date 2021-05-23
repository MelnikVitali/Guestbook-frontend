import useStyles from './styles';
import { useScrollTrigger, Zoom } from '@material-ui/core';
import React from 'react';

const ScrollTop = ({children, window}) => {
    const classes = useStyles();

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    };

    return (
        <Zoom in={trigger} >
            <div onClick={handleClick} role="presentation" className={classes.zoom} >
                {children}
            </div >
        </Zoom >
    );
};

export default ScrollTop;
