import React from 'react';

import { DateTime } from 'luxon';

import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';

const Comment = ({comment: {name, comment, date, _id}, removeComment, userName}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} >
                        {name.substr(0, 2).toUpperCase()}
                    </Avatar >

                }
                action={userName !== name ?
                    <IconButton aria-label="settings" onClick={() => removeComment(_id, name)} >
                        <CloseIcon />
                    </IconButton >
                    : ''
                }
                title={name}
                subheader={DateTime.fromISO(date).toFormat('dd.LL.yyyy HH:mm')}
            />
            <CardContent >
                <Typography variant="body2" color="textSecondary" component="p" >
                    {comment}
                </Typography >
            </CardContent >
        </Card >
    );
};

export default Comment;
